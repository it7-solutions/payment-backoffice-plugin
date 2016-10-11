import {Component} from '@angular/core';
import {PluginConfig} from "../services/plugin.config";
import {DataManagerService} from "../services/data-manager.service";
import {It7ErrorService} from "../services/it7-error.service";
import {It7AjaxService} from "../services/it7-ajax.service";

@Component({
    selector: 'my-app',
    templateUrl: PluginConfig.buildTemplateUrl('/templates/plugin.component.html'),
    providers: [
        DataManagerService,
        It7ErrorService,
        It7AjaxService
    ]
})
export class PluginComponent {
    constructor(
        private _config: PluginConfig
    ) {
        console.log('config', this._config);
    }
}
