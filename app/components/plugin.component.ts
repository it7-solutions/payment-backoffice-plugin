import {Component} from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
import {TypeSelect} from "../models/type-select";

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
        private _config: PluginConfig
    ) {
        console.log('config', this._config);
    }
}
