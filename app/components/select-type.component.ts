import {Component} from "@angular/core";
import {PluginConfig} from "../services/plugin.config";
import {Select} from "../models/select";
@Component({
    selector: 'select-type',
    templateUrl: 'app/templates/select-type.component.html'
})
export class SelectTypeComponent {
    payment_types: Select[];
    reg_services_out: Select[];
    price_types: Select[];
    constructor(
        private _config: PluginConfig
    ) {
        this.payment_types = this._config.payment_types;
        this.reg_services_out = this._config.reg_services_out;
        this.price_types = this._config.price_types;
    }

    /**
     * use in template
     */
    public onClickOkay() {
        console.log('clicked okay');
    }
}
