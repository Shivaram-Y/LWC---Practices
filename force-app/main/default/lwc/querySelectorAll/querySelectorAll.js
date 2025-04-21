import { LightningElement } from 'lwc';

export default class QuerySelectorAll extends LightningElement {


    fname='Shiva';
    lname='Ram';

    handleClick(event)
    {
        var input=this.template.querySelectorAll('lightning-input');

        input.forEach(function(element) 
        {
            if(element.name=="firstname")
            {
                this.fname=element.value
            }
            else if(element.name=="lastname")
            {
                this.lname=element.value
            }
        }
        , this);
    }

}