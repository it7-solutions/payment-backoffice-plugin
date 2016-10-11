import {Component} from "@angular/core";
import {PluginConfig} from "../services/plugin.config";
import {Select} from "../models/select";
import {TypeSelect} from "../models/type-select";
@Component({
    selector: 'select-type',
    templateUrl: PluginConfig.buildTemplateUrl('/templates/select-type.component.html')
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
    selected: TypeSelect = {
        payment_types: '',
        reg_services_out: '',
        price_types: ''
    };
    submitted = false;
    onSubmit() {
        console.log(this.selected);
        this.submitted = true;
    }

    /**
     * use in template
     */

}
