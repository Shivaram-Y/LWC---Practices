import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ShowToastEventLWC extends LightningElement {
    handleClickSuccess() {
        const eventS = new ShowToastEvent({
            title: 'Successful Notification',
            message: 'Sample Success toast Message',
            variant: 'Success',
            mode: 'Sticky'
        })
        this.dispatchEvent(eventS);
    }

    handleClickInfo() {
        const eventI = new ShowToastEvent({
            title: 'Successful Notification',
            message: 'Sample Info toast Message',
            variant: 'Info',
            mode: 'Sticky'
        })
        this.dispatchEvent(eventI);
    }
     handleClickWarning() {
        const eventW = new ShowToastEvent({
            title: 'Warning Notification',
            message: 'Sample Warning toast Message',
            variant: 'Warning',
            mode: 'pester'
        })
        this.dispatchEvent(eventW);
     }
     handleClickError() {
        const eventE = new ShowToastEvent({
            title: 'Error Notification',
            message: 'Sample Error toast Message',
            variant: 'Error',
            mode: 'dismissible'
        })
        this.dispatchEvent(eventE);
    }
}