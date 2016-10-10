import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs/Rx";

export interface PluginOptions {
    name: string;
}

@Injectable()
export class PluginConfig {
    name: string;
    static getUrl() {
        return (window && window['__it7_payment_bo_plugin__']) ? window['__it7_payment_bo_plugin__'] : 'app';
    }
    constructor(options: PluginOptions) {
        undefined === options.name || (this.name = options.name);
    }
}
