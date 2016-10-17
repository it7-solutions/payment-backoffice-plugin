import {Component} from "@angular/core";
import {AddForm} from "../models/addForm";
import {DataManagerService} from "../services/data-manager.service";
import {PluginConfig} from "../services/plugin.config";
import {DynamicFlags} from "../services/dynamic-flags.service";
@Component({
    selector: 'add-form',
    templateUrl: PluginConfig.buildTemplateUrl('/templates/add-form.component.html')
})
export class AddFormComponent{
    _show_form: boolean;
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

    onAddTransactionClick() {
        this.dataManager.addTransactionRequest(this.addForm)
            .then(
                data => {
                    this.dynamicFlags.update(data);
                    this.addForm = {
                        amount: '',
                        invoice_id: '',
                        payment_type_short_name: '',
                        bank: '',
                        transaction_date: ''
                    };
                    this._show_form = false;
                    setTimeout(function(){ this._show_form = true; }.bind(this), 1);
                }
            );
    }

    ngAfterContentChecked() {
        this.config.callAfterInit();
        this.config.callDatePicker((date: string) => {
            this.addForm.transaction_date = date;
        });
    }
}
