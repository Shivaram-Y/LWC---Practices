import { LightningElement,track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountHandler.getAccountList';
export default class DataTableDefault extends LightningElement {
    
    @track columnsList = [
        { label: 'Name', fieldName: 'Name', type: 'text' },
        { label: 'Phone', fieldName: 'Phone', type: 'text' },
        { label: 'Rating', fieldName: 'Rating', type: 'text' },
        { label: 'Industry', fieldName: 'Industry', type: 'text' },
    ];

    @track dataList = [];
    @track toggleText = false;
    connectedCallback() {
        this.getAccounts();
    }
    getAccounts() {
        this.toggleText = !this.toggleText; 
        getAccountList().then((result) => {
            this.dataList = result;
            console.log('Data length = ' + this.dataList.length);
        })   
        .catch((error) => {
            console.error('Error fetching accounts:', error);
        });
    }

}
    

