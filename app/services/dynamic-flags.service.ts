import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs/Rx";

@Injectable()
export class DynamicFlags {
    show_form: boolean = false;
    is_invoice: boolean = false;
    chosen_payment_type: string;
    chosen_price_type: string;
    chosen_reg_service_id: number;
    show_edit_invoice_btn: boolean;
    total_paid: string;
    total_fee: string;
    balance_due: string;
    show_download_invoice_btn: boolean;
    show_download_receipt_btn: boolean;
    payer_notes: string;
    payment_completed: boolean;
    show_payment_completed: boolean;
    show_transactions_form: boolean;
    transactions: any[];
    invoices: any[];
    payment_date: string;

    private _onUpdate: BehaviorSubject<DynamicFlags>;
    public onUpdate: Observable<DynamicFlags>;

    constructor() {
        this._onUpdate = new BehaviorSubject(this);
        this.onUpdate = this._onUpdate.asObservable();
    }


    public update(options: any) {
        undefined === options.show_form || (this.show_form = options.show_form);
        undefined === options.is_invoice || (this.is_invoice = options.is_invoice);
        undefined === options.chosen_payment_type || (this.chosen_payment_type = options.chosen_payment_type);
        undefined === options.chosen_price_type || (this.chosen_price_type = options.chosen_price_type);
        undefined === options.chosen_reg_service_id || (this.chosen_reg_service_id = options.chosen_reg_service_id);
        undefined === options.show_edit_invoice_btn || (this.show_edit_invoice_btn = options.show_edit_invoice_btn);
        undefined === options.total_paid || (this.total_paid = options.total_paid);
        undefined === options.total_fee || (this.total_fee = options.total_fee);
        undefined === options.balance_due || (this.balance_due = options.balance_due);
        undefined === options.show_download_invoice_btn || (this.show_download_invoice_btn = options.show_download_invoice_btn);
        undefined === options.show_download_receipt_btn || (this.show_download_receipt_btn = options.show_download_receipt_btn);
        undefined === options.payer_notes || (this.payer_notes = options.payer_notes);
        undefined === options.payment_completed || (this.payment_completed = options.payment_completed);
        undefined === options.show_payment_completed || (this.show_payment_completed = options.show_payment_completed);
        undefined === options.show_transactions_form || (this.show_transactions_form = options.show_transactions_form);
        undefined === options.transactions || (this.transactions = options.transactions);
        undefined === options.invoices || (this.invoices = options.invoices);
        undefined === options.payment_date || (this.payment_date = options.payment_date);

        this._onUpdate.next(this);
    }
}
