import {Component, Input} from "@angular/core";
import {PluginConfig} from "../services/plugin.config";
import {TypeSelect} from "../models/type-select";
import {DynamicFlags} from "../services/dynamic-flags.service";
@Component({
    selector: 'view-type',
    templateUrl: PluginConfig.buildTemplateUrl('/templates/view-type.component.html')
})
export class ViewTypeComponent {
    @Input() selected: TypeSelect;
    chosen_payment_type: string;

    constructor(
        private config: PluginConfig,
        private dynamicFlags: DynamicFlags
    ) {}

    getPaymentLabelByKey() {
        var key = this.dynamicFlags.chosen_payment_type;
        return this.config.payment_types.find((d) => {
            return d.key === key;
        }).label;
    }
    getPriceLabelByKey() {
        var key = this.dynamicFlags.chosen_price_type;
        return this.config.price_types.find((d) => {
            return d.key === key;
        }).label;
    }
    getRegServiceNameById() {
        var key = this.dynamicFlags.chosen_reg_service_id;
        return this.config.reg_services_out.find((d) => {
            return d.id === key;
        }).name;
    }
}
