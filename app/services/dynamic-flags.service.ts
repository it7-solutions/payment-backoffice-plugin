import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs/Rx";

@Injectable()
export class DynamicFlags {
    show_form: boolean = false;
    chosen_payment_type: string;
    chosen_price_type: string;
    chosen_reg_service_id: number;

    private _onUpdate: BehaviorSubject<DynamicFlags>;
    public onUpdate: Observable<DynamicFlags>;

    constructor() {
        this._onUpdate = new BehaviorSubject(this);
        this.onUpdate = this._onUpdate.asObservable();
    }


    public update(options: any) {
        undefined === options.show_form || (this.show_form = options.show_form);
        undefined === options.chosen_payment_type || (this.chosen_payment_type = options.chosen_payment_type);
        undefined === options.chosen_price_type || (this.chosen_price_type = options.chosen_price_type);
        undefined === options.chosen_reg_service_id || (this.chosen_reg_service_id = options.chosen_reg_service_id);

        this._onUpdate.next(this);
    }
}
