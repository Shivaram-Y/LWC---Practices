public with sharing class MarchApexController {
    @AuraEnabled(cacheable=true)
    
    public static list<Account> getAccounts() {
        return [select Name,Rating,Industry from Account where rating = 'Cold'];

    }
}