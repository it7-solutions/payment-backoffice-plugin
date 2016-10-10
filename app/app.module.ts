import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {PluginComponent}  from './components/plugin.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [PluginComponent],
    bootstrap: [PluginComponent]
})
export class AppModule {
}
