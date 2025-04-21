import { LightningElement, track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountHandler.getAccountList';

export default class DataTableRowSelection extends LightningElement {

    @track columnsList = [
        { label: 'Name', fieldName: 'Name', type: 'text' },
        { label: 'Phone', fieldName: 'Phone', type: 'text' },
        { label: 'Rating', fieldName: 'Rating', type: 'text' },
        { label: 'Industry', fieldName: 'Industry', type: 'text' },
    ];
    
    @track dataList = [];
    @track selectedRows = [];
    @track toggleText = false;
    connectedCallback() {
        this.getAccounts();
    }
    getAccounts() {
        this.toggleText = !this.toggleText;
        getAccountList().then((result) => {
            console.log('result = ', result);
            this.dataList = result;
            console.log('Data length = ' + this.dataList.length);
        })
            .catch((error) => {
                console.error('Error fetching accounts:', error);
            });
    }
    handleRowSelection(event) {
            this.selectedRows = event.detail.selectedRows;
        console.log('selectedRows = ' + JSON.stringify(this.selectedRows));
    }
        
}
