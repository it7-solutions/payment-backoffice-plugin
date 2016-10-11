import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PluginComponent}  from './components/plugin.component';
import {SelectTypeComponent} from "./components/select-type.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [PluginComponent, SelectTypeComponent],
    bootstrap: [PluginComponent]
})
export class AppModule {
}
