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

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [PluginComponent, SelectTypeComponent, BusyPopupComponent],
    bootstrap: [PluginComponent],
    providers: [
        PopupService,
        DataManagerService,
        It7ErrorService,
        It7AjaxService
    ]
})
export class AppModule {
}
