import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs/Rx";

@Injectable()
export class DynamicFlags {
    show_form: boolean = false;

    private _onUpdate: BehaviorSubject<DynamicFlags>;
    public onUpdate: Observable<DynamicFlags>;

    constructor() {
        this._onUpdate = new BehaviorSubject(this);
        this.onUpdate = this._onUpdate.asObservable();
    }


    public update(options: any) {
        undefined === options.show_form || (this.show_form = options.show_form);

        this._onUpdate.next(this);
    }
}
