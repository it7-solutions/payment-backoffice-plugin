import {Component, OnInit} from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
import {TypeSelect} from "../models/type-select";
import {DataManagerService} from "../services/data-manager.service";
import {DynamicFlags} from "../services/dynamic-flags.service";
import {FormSave} from "../models/form";

@Component({
    selector: 'payment-backoffice-plugin',
    templateUrl: PluginConfig.buildTemplateUrl('/templates/plugin.component.html')
})
export class PluginComponent implements OnInit {
    constructor(
        private _config: PluginConfig,
        private dataManager: DataManagerService,
        private dynamicFlags: DynamicFlags
    ) {
        console.log('config', this._config);
        console.log('this.dynamicFlags', this.dynamicFlags);
    }

    addTransaction: boolean = false;

    selected: TypeSelect = {
        payment_type: '',
        reg_service_id: '',
        price_type: ''
    };

    formData: FormSave = {
        notes: '',
        payment_completed: this.dynamicFlags.payment_completed
    };
    formDataNotesPayment: FormSave = {
        notes: this.dynamicFlags.payer_notes,
        payment_completed: this.dynamicFlags.payment_completed
    };
    formDataNotes: FormSave = {
        notes: this.dynamicFlags.payer_notes
    };



    onCancelInvoiceClick() {
        this.dataManager.cancelInvoiceRequest()
            .then(
                data => {
                    this.dynamicFlags.update(data);
                    // console.log('this.dynamicFlags', this.dynamicFlags);
                }
            );
    }

    onInvoiceClick() {
        window.open(this._config.download_invoice_url, '_blank');
    }

    onReceiptClick() {
        window.open(this._config.download_receipt_url, '_blank');
    }

    onSaveClick() {
        // console.log('formData', this.formData);
        this.dataManager.saveRequest(this.formData);
        this.addTransaction = false;
    }

    ngOnInit() {
        if(this._config.show_payment_completed) {
            this.formData = this.formDataNotesPayment;
        } else {
            this.formData = this.formDataNotes;
        }
    }

    ngAfterContentChecked() {
        this._config.callAfterInit();
    }

    onNotify(message:string):void {
        this.addTransaction = true;
        this.formData.payment_completed = true;
    }
}
