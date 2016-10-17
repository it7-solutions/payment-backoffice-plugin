import {Component} from "@angular/core";
import {PluginConfig} from "../services/plugin.config";
@Component({
    selector: '[list-transactions]',
    templateUrl: PluginConfig.buildTemplateUrl('/templates/list-transactions.component.html')
})
export class ListTransactionsComponent {
    constructor(
        private config: PluginConfig
    ) {}
}
