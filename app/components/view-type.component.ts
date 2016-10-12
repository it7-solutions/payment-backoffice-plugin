import {Component} from "@angular/core";
import {PluginConfig} from "../services/plugin.config";
@Component({
    selector: 'view-type',
    templateUrl: PluginConfig.buildTemplateUrl('/templates/view-type.component.html')
})
export class ViewTypeComponent {

}
