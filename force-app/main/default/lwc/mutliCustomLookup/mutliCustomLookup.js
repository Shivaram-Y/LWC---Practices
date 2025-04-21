import { LightningElement, wire, api } from 'lwc';
import fetchLookupData from "@salesforce/apex/customLookupController.fetchLookupData";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const DELAY = 300; // milliseconds

export default class MutliCustomLookup extends LightningElement {
    searchKey;
    @api objectApiName = "Account";
    @api label = "Account";
    @api placeholder = "Search Account";
    @api iconName = "standard:account";

    hasRecords = false;
    searchOutput = [];
    selectedRecords = [];
    delayTimeout;

    @wire(fetchLookupData, {
        searchKey: "$searchKey",
        objectApiName: "$objectApiName"
    })
    searchResult({ data, error }) {
        if (data) {
            this.hasRecords = data.length > 0;
            this.searchOutput = data;
        } else if (error) {
            console.error("Error fetching lookup data:", error);
        }
    }

    changeHandler(event) {
        clearTimeout(this.delayTimeout);
        const value = event.target.value;
        this.delayTimeout = setTimeout(() => {
            this.searchKey = value;
        }, DELAY);
    }

    clickHandler(event) {
        const recId = event.currentTarget.getAttribute("data-recid");
        const selectedRecord = this.searchOutput.find(currItem => currItem.Id === recId);

        if (!selectedRecord) {
            console.warn("Selected record not found in searchOutput");
            return;
        }

        const alreadyExists = this.selectedRecords.find(rec => rec.name === recId);
        if (alreadyExists) {
            this.showToast('Record Already Selected', `${selectedRecord.Name} is already in the list.`, 'error');
            return;
        }

        const pill = {
            type: 'icon',
            label: selectedRecord.Name,
            name: recId,
            iconName: this.iconName,
            alternativeText: selectedRecord.Name
        };

        this.selectedRecords = [...this.selectedRecords, pill];
    }

    handleItemRemove(event) {
        const recId = event.detail.item.name;
        this.selectedRecords = this.selectedRecords.filter(rec => rec.name !== recId);
    }

    get showPillContainer() {
        return this.selectedRecords.length > 0;
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
            mode: 'dismissable'
        }));
    }
}
