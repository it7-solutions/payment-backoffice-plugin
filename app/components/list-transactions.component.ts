import {Component} from "@angular/core";
import {PluginConfig} from "../services/plugin.config";
import {DynamicFlags} from "../services/dynamic-flags.service";
import {TransactionPopup} from "./transaction-popup.component";
import {PopupService} from "../services/popup.service";
import {TransactionInformation} from "../models/transactionInformation";
@Component({
    selector: '[list-transactions]',
    templateUrl: PluginConfig.buildTemplateUrl('/templates/list-transactions.component.html')
})
export class ListTransactionsComponent {
    constructor(
        private config: PluginConfig,
        private dynamicFlags: DynamicFlags,
        private popupService: PopupService
    ) {}

    onShowTransactionDetailsClick(id: number) {
        var data: TransactionInformation = {
            success: this.dynamicFlags.transactions[id].details.success,
            error: this.dynamicFlags.transactions[id].details.error
        };
        var popup = new TransactionPopup(data);
        this.popupService.showPopup(popup);
    }
}
