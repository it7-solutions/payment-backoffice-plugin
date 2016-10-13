import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';

import {PluginConfig} from './plugin.config';
import {It7ErrorService} from "./it7-error.service";
import {It7AjaxService} from './it7-ajax.service'
import {PopupService} from "./popup.service";
import {BusyPopup} from "../components/busy-popup.component";


@Injectable()
export class DataManagerService {
    private popup: BusyPopup;
    constructor(
        private config: PluginConfig,
        private err: It7ErrorService,
        private it7Ajax: It7AjaxService,
        private popupService: PopupService
    ){}


    getInvoiceRequest(selection: Object){
        console.log('get invoice request');
        this.showLoading();
        selection = JSON.stringify(selection);
        console.log('new data', selection);
        return this.it7Ajax
            .post(this.config.get_invoice_url, {selection})
            .then(
                res => {
                    this.hideLoading();
                    return res;
                }
            )
    }

    getIssueInvoiceRequest(selection: Object) {
        console.log('issue invoice');
        this.showLoading();
        selection = JSON.stringify(selection);
        return this.it7Ajax
            .post(this.config.create_invoice_url, {selection})
            .then(
                res => {
                    this.hideLoading();
                    return res;
                }
            )
    }

    cancelInvoiceRequest() {
        this.showLoading();
        return this.it7Ajax
            .post(this.config.cancel_invoice_url, {})
            .then(
                res => {
                    this.hideLoading();
                    return res;
                }
            )
    }

    saveRequest(selection: Object) {
        this.showLoading();
        selection = JSON.stringify(selection);
        console.log('form save data', selection);
        return this.it7Ajax
            .post(this.config.save_form_url, {selection})
            .then(
                res => {
                    this.hideLoading();
                    return res;
                }
            )
    }

    private showLoading(){
        console.log('show loading');
        this.popup = new BusyPopup();
        this.popupService.showPopup(this.popup);
    }

    private hideLoading(): any{
        console.log('hide loading');
        if(this.popup){
            this.popup.visible = false;
            this.popupService.showPopup(this.popup);
            this.popup = undefined;
        }
    }
}

