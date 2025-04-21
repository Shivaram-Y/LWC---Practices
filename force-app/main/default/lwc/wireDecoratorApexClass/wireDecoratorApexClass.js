import { LightningElement,wire,api } from 'lwc';
import getAccountList from '@salesforce/apex/wireDecoratorClass.getAccountList';

export default class WireDecoratorApexClass extends LightningElement {

    @api recordId;

    @wire (getAccountList, {accId:'$recordId'}) accounts;

}