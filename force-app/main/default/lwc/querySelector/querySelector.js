import { LightningElement } from 'lwc';

export default class QuerySelector extends LightningElement {

    Name='RS';

    handleClick(event)

    {
        this.name=this.template.querySelector('lightning-inpu').value;
    }

}