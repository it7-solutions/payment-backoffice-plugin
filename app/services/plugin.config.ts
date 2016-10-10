import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs/Rx";

export interface PluginOptions {
    name: string;
}

@Injectable()
export class PluginConfig {
    name: string;
    constructor(options: PluginOptions) {
        undefined === options.name || (this.name = options.name);
    }
}
