import {Component, Output, EventEmitter} from "@angular/core";
import {AddForm} from "../models/addForm";
import {DataManagerService} from "../services/data-manager.service";
import {PluginConfig} from "../services/plugin.config";
import {DynamicFlags} from "../services/dynamic-flags.service";
import {ValidateField} from "../models/validate";
@Component({
    selector: 'add-form',
    templateUrl: PluginConfig.buildTemplateUrl('/templates/add-form.component.html')
})
export class AddFormComponent{
    _show_form: boolean;
    formValid: boolean = true;

    constructor(
        private dataManager: DataManagerService,
        private config: PluginConfig,
        private dynamicFlags: DynamicFlags
    ) {
        this._show_form = true;
    }
    addForm: AddForm = {
        amount: '',
        invoice_id: '',
        payment_type_short_name: '',
        bank: '',
        transaction_date: ''
    };

    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    onAddTransactionClick() {
        this.onValidateFields();
        // console.log('form', this.formValid);
        if(this.checkValid()) {
            this.dataManager.addTransactionRequest(this.addForm)
                .then(
                    data => {
                        this.dynamicFlags.update(data);
                        console.log('this.dynamicFlags', this.dynamicFlags);
                        this.notify.emit(data);
                        // console.log('this.dynamicFlags', this.dynamicFlags);
                        this.addForm = {
                            amount: '',
                            invoice_id: '',
                            payment_type_short_name: '',
                            bank: '',
                            transaction_date: ''
                        };
                        this._show_form = false;
                        setTimeout(function () {
                            this._show_form = true;
                        }.bind(this), 1);
                    }
                );
        }
    }

    ngAfterContentChecked() {
        this.config.callAfterInit();
        this.config.callDatePicker((date: string) => {
            this.addForm.transaction_date = date;
        });
        this.config.makeCallbackOnDemand((value: string) => {
            this.addForm.amount = value;
        })
    }

    validateFields: {[key:string] : ValidateField} = {
        amount: {
            isValid: true,
            messageText: '',
            isRequired: true
        },
        invoice_id: {
            isValid: true,
            messageText: '',
            isRequired: true,
            isSelect: true
        },
        payment_type_short_name: {
            isValid: true,
            messageText: '',
            isRequired: true,
            isSelect: true
        },
        bank: {
            isValid: true,
            messageText: '',
            isRequired: false
        },
        transaction_date: {
            isValid: true,
            messageText: '',
            isRequired: true
        }
    };

    private setAllValid() {
        for(var fieldName in this.validateFields) {
            var field:ValidateField = this.validateFields[fieldName];
            field.isValid = true;
            field.messageText = '';
        }
    }
    private checkRequired() {
        for(var fieldName in this.validateFields) {
            var field:ValidateField = this.validateFields[fieldName];
            if(field.isRequired) {
                var value = this.addForm[fieldName];
                if('' === value || value === null) {
                    field.isValid = false;
                    if(field.isSelect) {
                        field.messageText = (field.messageText ? field.messageText + '. ' : '') + 'Please make selection';
                    } else {
                        field.messageText = (field.messageText ? field.messageText + '. ' : '') + 'Please fill this field';
                    }
                }
            }
        }
    }
    private checkValid() {
        this.formValid = true;
        for(var i in this.validateFields) {
            if(this.validateFields[i].isValid === false) {
                this.formValid = false;
                break;
            }
        }
        return this.formValid;
    }
    onValidateFields() {
        this.setAllValid();
        this.checkRequired();
        this.checkValid();
    }
}
