import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/MarchApexController.getAccounts'

export default class MarchLWC extends LightningElement {
myAccounts
myError
@wire (getAccounts) coldAccounts({data, error}){
    if(data){
        this.myAccounts=data
        this.myError=undefined
    }
    if(Error){
        this.myAccounts=undefined
        this.myError=error
    }
}
}