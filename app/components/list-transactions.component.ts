import {Component} from "@angular/core";
import {PluginConfig} from "../services/plugin.config";
import {DynamicFlags} from "../services/dynamic-flags.service";
@Component({
    selector: '[list-transactions]',
    templateUrl: PluginConfig.buildTemplateUrl('/templates/list-transactions.component.html')
})
export class ListTransactionsComponent {
    constructor(
        private config: PluginConfig,
        private dynamicFlags: DynamicFlags
    ) {}
}
