import {Component} from '@angular/core';
import {BasePopup, PopupService} from "../services/popup.service";
import {It7ErrorService} from "../services/it7-error.service";
import {DataManagerService} from "../services/data-manager.service";
import {PluginConfig} from "../services/plugin.config";
import {DynamicFlags} from "../services/dynamic-flags.service";

export class TransactionPopup extends BasePopup {
    data: any;
    constructor(data: any) {
        super('TransactionPopup');
        this.data = data;
    }
}

@Component({
    selector: 'transaction-popup',
    templateUrl: PluginConfig.buildTemplateUrl('/templates/transaction-popup.component.html')
})
export class TransactionPopupComponent {
    popup: TransactionPopup;
    styleLeft: string;
    styleTop: string;
    overlayWidth: string;
    overlayHeight: string;
    window: any;


    constructor(private err: It7ErrorService,
                private requestPopupService: PopupService,
                private dataManager: DataManagerService,
                private dynamicFlags: DynamicFlags,
                private config: PluginConfig) {
        this.window = window;
        this.requestPopupService.popup.subscribe(popup => this.checkPopup(popup));
    }

    private checkPopup(popup: BasePopup) {
        if (popup instanceof TransactionPopup) {
            this.showPopup(popup as TransactionPopup);
        }
    }

    private showPopup(popup: TransactionPopup) {
        if (popup.data) {
            this.popup = popup;
            this.setOverlay();
            this.centerPopup();
            console.log('popup.data', popup.data);
        } else {
            this.err.fire('Error: Cannon make request because not enough data');
        }
    }

    private setOverlay() {
        this.overlayHeight = this.window.innerHeight + "px";
        this.overlayWidth = this.window.innerWidth + "px";
    }

    private centerPopup() {
        this.styleTop = (this.window.innerHeight - 450) / 2 + "px";
        this.styleLeft = (this.window.innerWidth - 800) / 2 + "px";
    }

    public onCancelClick() {
        this.popup = undefined;
    }
}
