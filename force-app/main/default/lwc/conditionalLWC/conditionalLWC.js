import { LightningElement } from 'lwc';

export default class ConditionalLWC extends LightningElement {



handleChange(event)
{
    this.flag=event.target.checked;
}
}

