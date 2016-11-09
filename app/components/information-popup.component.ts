import {Component, Input} from '@angular/core';
import {BasePopup, PopupService} from "../services/popup.service";
import {It7ErrorService} from "../services/it7-error.service";
import {DataManagerService} from "../services/data-manager.service";
import {PluginConfig} from "../services/plugin.config";
import {TypeSelect} from "../models/type-select";
import {DynamicFlags} from "../services/dynamic-flags.service";

export class ConfirmPopup extends BasePopup {
    data: any;
    constructor(data: any) {
        super('ConfirmPopup');
        this.data = data;
    }
}

@Component({
    selector: 'information-popup',
    templateUrl: PluginConfig.buildTemplateUrl('/templates/information-popup.component.html')
})
export class InformationPopupComponent {
    popup: ConfirmPopup;
    styleLeft: string;
    styleTop: string;
    overlayWidth: string;
    overlayHeight: string;
    window: any;

    @Input() selected: TypeSelect;

    constructor(private err: It7ErrorService,
                private requestPopupService: PopupService,
                private dataManager: DataManagerService,
                private dynamicFlags: DynamicFlags,
                private config: PluginConfig) {
        this.window = window;
        this.requestPopupService.popup.subscribe(popup => this.checkPopup(popup));
    }

    private checkPopup(popup: BasePopup) {
        if (popup instanceof ConfirmPopup) {
            this.showPopup(popup as ConfirmPopup);
        }
    }

    private showPopup(popup: ConfirmPopup) {
        if (popup.data) {
            this.popup = popup;
            this.setOverlay();
            this.centerPopup();
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

    public onIssueInvoiceClick() {
        this.popup = undefined;
        this.dataManager.getIssueInvoiceRequest(this.selected)
            .then(
                data => {
                    this.dynamicFlags.update(data);
                    // console.log('this.dynamicFlags', this.dynamicFlags);
                }
            )
    }
}
