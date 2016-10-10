import {Component} from '@angular/core';
import {PluginConfig} from "../services/plugin.config";

@Component({
    selector: 'my-app',
    templateUrl: PluginConfig.getUrl() + '/templates/plugin.component.html'
})
export class PluginComponent {
    constructor(
        private _config: PluginConfig
    ) {
        console.log('config', this._config);
    }
}
