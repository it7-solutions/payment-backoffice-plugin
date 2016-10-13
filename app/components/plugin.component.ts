import {Component} from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
import {TypeSelect} from "../models/type-select";
import {DataManagerService} from "../services/data-manager.service";
import {DynamicFlags} from "../services/dynamic-flags.service";

@Component({
    selector: 'my-app',
    templateUrl: PluginConfig.buildTemplateUrl('/templates/plugin.component.html')
})
export class PluginComponent {
    selected: TypeSelect = {
        payment_type: '',
        reg_service_id: '',
        price_type: ''
    };
    constructor(
        private _config: PluginConfig,
        private dataManager: DataManagerService,
        private dynamicFlags: DynamicFlags
    ) {
        console.log('config', this._config);
    }

    onCancelInvoiceClick() {
        this.dataManager.cancelInvoiceRequest()
            .then(
                data => {
                    this.dynamicFlags.update(data);
                }
            );
    }

    onInvoiceClick() {
        window.open(this._config.download_invoice_url, '_blank');
    }

    onReceiptClick() {
        window.open(this._config.download_receipt_url, '_blank');
    }
}
