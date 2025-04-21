import { LightningElement } from 'lwc';

export default class PcParent extends LightningElement {
    parentmessage = " Hi I am from Parent Component";
    number = 0;
    
    handleChange(event) {
        this.number = event.target.value;
    }

}