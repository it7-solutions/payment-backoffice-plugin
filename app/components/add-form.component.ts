import {Component, OnInit} from "@angular/core";
import {AddForm} from "../models/addForm";
import {DataManagerService} from "../services/data-manager.service";
import {PluginConfig} from "../services/plugin.config";
import {DynamicFlags} from "../services/dynamic-flags.service";
@Component({
    selector: 'add-form',
    templateUrl: PluginConfig.buildTemplateUrl('/templates/add-form.component.html')
})
export class AddFormComponent implements OnInit{
    constructor(
        private dataManager: DataManagerService,
        private config: PluginConfig,
        private dynamicFlags: DynamicFlags
    ) {}
    addForm: AddForm = {
        amount: '',
        invoice_id: '',
        payment_type_short_name: '',
        bank: '',
        transaction_date: ''
    };

    onAddTransactionClick() {
        this.dataManager.addTransactionRequest(this.addForm)
            .then(
                data => {
                    this.dynamicFlags.update(data);
                }
            );
    }

    ngOnInit() {
        // init datapicker
        this.config.callDatePicker((date: string) => {
            this.addForm.transaction_date = date;
        });
    }

    ngAfterViewInit() {
        this.config.callAfterInit();
    }
}
