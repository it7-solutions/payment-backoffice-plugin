import {Component} from "@angular/core";
import {AddForm} from "../models/addForm";
import {DataManagerService} from "../services/data-manager.service";
import {PluginConfig} from "../services/plugin.config";
@Component({
    selector: 'add-form',
    templateUrl: PluginConfig.buildTemplateUrl('/templates/add-form.component.html')
})
export class AddFormComponent {
    constructor(
        private dataManager: DataManagerService,
        private config: PluginConfig
    ) {

    }
    addForm: AddForm = {
        amount: '',
        invoice_id: '',
        payment_type_short_name: '',
        bank: '',
        transaction_date: ''
    };

    onAddTransactionClick() {
        this.dataManager.addTransactionRequest(this.addForm);
    }
}
