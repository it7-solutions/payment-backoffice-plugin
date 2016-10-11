import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PluginComponent}  from './components/plugin.component';
import {SelectTypeComponent} from "./components/select-type.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [PluginComponent, SelectTypeComponent],
    bootstrap: [PluginComponent]
})
export class AppModule {
}
