import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PluginComponent}  from './components/plugin.component';
import {SelectTypeComponent} from "./components/select-type.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {PopupService} from "./services/popup.service";
import {DataManagerService} from "./services/data-manager.service";
import {It7ErrorService} from "./services/it7-error.service";
import {It7AjaxService} from "./services/it7-ajax.service";
import {BusyPopupComponent} from "./components/busy-popup.component";
import {InformationPopupComponent} from "./components/information-popup.component";
import {DynamicFlags} from "./services/dynamic-flags.service";
import {PluginConfig} from "./services/plugin.config";
import {ViewTypeComponent} from "./components/view-type.component";
import {AddFormComponent} from "./components/add-form.component";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [
        PluginComponent,
        SelectTypeComponent,
        BusyPopupComponent,
        InformationPopupComponent,
        ViewTypeComponent,
        AddFormComponent
    ],
    bootstrap: [PluginComponent],
    providers: [
        PopupService,
        DataManagerService,
        It7ErrorService,
        It7AjaxService,
        DynamicFlags
    ]
})
export class AppModule {
    constructor(
        private config: PluginConfig,
        private dynamicFlags: DynamicFlags
    ) {
        this.dynamicFlags.update(this.config);
        console.log('this.dynamicFlags', this.dynamicFlags);
    }
}
