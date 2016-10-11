import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs/Rx";

export interface PluginOptions {
    payer: string;
    chosen_online_system: string;
    chosen_payment_type: string;
    chosen_reg_service_id: string;
    chosen_price_type: string;
    payment_types: any[];
    payment_date: string;
    reg_services_out: any[];
    is_invoice: boolean;
    show_form: boolean;
    show_download_invoice_btn: boolean;
    show_download_receipt_btn: boolean;
    show_edit_invoice_btn: boolean;
    show_reg_services: boolean;
    show_payment_types: boolean;
    show_price_types: boolean;
    show_transactions_form: boolean;
    get_invoice_url: string;
    create_invoice_url: string;
    cancel_invoice_url: string;
    download_invoice_url: string;
    download_receipt_url: string;
    save_form_url: string;
    save_transaction_url: string;
    view_step: string;
    transactions_out: any[];
    invoices_out: any[];
    price_types: any[];
    payer_notes: string;
    payment_completed: boolean;
    show_payment_completed: boolean;
    balance_due: string;
    total_paid: string;
    total_fee: string;
}

@Injectable()
export class PluginConfig {
    static buildTemplateUrl(path: string) {
        var base = (window && window['__it7_payment_bo_plugin__']) ? window['__it7_payment_bo_plugin__'] : 'app';
        return base.replace(/\/+$/,'') + '/' + path.replace(/^\/+/,'');
    }
    payer: string;
    chosen_online_system: string;
    chosen_payment_type: string;
    chosen_reg_service_id: string;
    chosen_price_type: string;
    payment_types: any[];
    payment_date: string;
    reg_services_out: any[];
    is_invoice: boolean;
    show_form: boolean;
    show_download_invoice_btn: boolean;
    show_download_receipt_btn: boolean;
    show_edit_invoice_btn: boolean;
    show_reg_services: boolean;
    show_payment_types: boolean;
    show_price_types: boolean;
    show_transactions_form: boolean;
    get_invoice_url: string;
    create_invoice_url: string;
    cancel_invoice_url: string;
    download_invoice_url: string;
    download_receipt_url: string;
    save_form_url: string;
    save_transaction_url: string;
    view_step: string;
    transactions_out: any[];
    invoices_out: any[];
    price_types: any[];
    payer_notes: string;
    payment_completed: boolean;
    show_payment_completed: boolean;
    balance_due: string;
    total_paid: string;
    total_fee: string;
    constructor(options: PluginOptions) {
        this.payer = options.payer;
        this.chosen_online_system = options.chosen_online_system;
        this.chosen_payment_type = options.chosen_payment_type;
        this.chosen_reg_service_id = options.chosen_reg_service_id;
        this.chosen_price_type = options.chosen_price_type;
        this.payment_types = options.payment_types;
        this.payment_date = options.payment_date;
        this.reg_services_out = options.reg_services_out;
        this.is_invoice = options.is_invoice;
        this.show_form = options.show_form;
        this.show_download_invoice_btn = options.show_download_invoice_btn;
        this.show_download_receipt_btn = options.show_download_receipt_btn;
        this.show_edit_invoice_btn = options.show_edit_invoice_btn;
        this.show_reg_services = options.show_reg_services;
        this.show_payment_types = options.show_payment_types;
        this.show_price_types = options.show_price_types;
        this.show_transactions_form = options.show_transactions_form;
        this.get_invoice_url = options.get_invoice_url;
        this.create_invoice_url = options.create_invoice_url;
        this.cancel_invoice_url = options.cancel_invoice_url;
        this.download_invoice_url = options.download_invoice_url;
        this.download_receipt_url = options.download_receipt_url;
        this.save_form_url = options.save_form_url;
        this.save_transaction_url = options.save_transaction_url;
        this.view_step = options.view_step;
        this.transactions_out = options.transactions_out;
        this.invoices_out = options.invoices_out;
        this.price_types = options.price_types;
        this.payer_notes = options.payer_notes;
        this.payment_completed = options.payment_completed;
        this.show_payment_completed = options.show_payment_completed;
        this.balance_due = options.balance_due;
        this.total_paid = options.total_paid;
        this.total_fee = options.total_fee;
    }
}
