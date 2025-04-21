import { LightningElement, api } from 'lwc';

export default class PcChild extends LightningElement {
    @api message;
    @api num;
}
