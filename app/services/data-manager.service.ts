import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';

import {PluginConfig} from './plugin.config';
import {It7ErrorService} from "./it7-error.service";
import {It7AjaxService} from './it7-ajax.service'


@Injectable()
export class DataManagerService {
    constructor(
        private config: PluginConfig,
        private err: It7ErrorService,
        private it7Ajax: It7AjaxService
    ){}


    getInvoiceRequest(selection: Object){
        console.log('save request');
        selection = JSON.stringify(selection);
        console.log('new data', selection);
        return this.it7Ajax
            .post(this.config.get_invoice_url, {selection})
            .then(
                res => {
                    return res;
                }
            )
    }
}

