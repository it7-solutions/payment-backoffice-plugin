import {Component, Input} from "@angular/core";
import {PluginConfig} from "../services/plugin.config";
import {Select} from "../models/select";
import {TypeSelect} from "../models/type-select";
import {DataManagerService} from "../services/data-manager.service";
import {ConfirmPopup} from "./information-popup.component";
import {PopupService} from "../services/popup.service";
import {DynamicFlags} from "../services/dynamic-flags.service";
@Component({
    selector: 'select-type',
    templateUrl: PluginConfig.buildTemplateUrl('/templates/select-type.component.html')
})
export class SelectTypeComponent {
    payment_types: Select[];
    reg_services_out: Select[];
    price_types: Select[];

    popUpInformation: string;

    constructor(private _config: PluginConfig,
                private _dataManager: DataManagerService,
                private _requestPopupService: PopupService,
                private dynamicFlags: DynamicFlags) {
        this.payment_types = this._config.payment_types;
        this.reg_services_out = this._config.reg_services_out;
        this.price_types = this._config.price_types;
    }

    @Input() selected: TypeSelect;

    submitted = false;

    onSubmit() {
        // console.log(this.selected);
        this.submitted = true;
        this._dataManager.getInvoiceRequest(this.selected)
            .then(
            data => {
                this.popUpInformation = data;
                // console.log(this.popUpInformation);
                var popup = new ConfirmPopup(this.popUpInformation);
                this._requestPopupService.showPopup(popup);
                // console.log('this.dynamicFlags', this.dynamicFlags);
                this.dynamicFlags.update(data);
            }
        );
    }

    ngAfterViewInit() {
        this._config.callAfterInit();
    }
}
