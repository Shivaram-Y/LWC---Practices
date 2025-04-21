import { LightningElement, track } from 'lwc';
export default class HelloWorld extends LightningElement {
 
    message = "Hi Bro, One way data binding from JS";
    greetings = "" ;
    handleChange(event) {
    this.greetings = event.target.value;
    }
    @track isShow = false;
    handleClick(){
    this.isShow = true;
    }

    handleClickHide() {
        this.isShow = false;
    }

    @track toggleText = false;
    get handleToggleButtonLabel() {
        return this.toggleText ? 'Hide Text' : 'Show Text';
    }

    @track toggleText = false;
    handleToggle() {
        this.toggleText = !this.toggleText;   
    }
}