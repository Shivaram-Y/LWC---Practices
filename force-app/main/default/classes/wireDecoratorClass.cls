public with sharing class wireDecoratorClass {
 
@AuraEnabled (cacheable=true)

public static List<Account> getAccountList (id accId){
    try {
        return [select Name, Phone from Account where id=:accId];
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
}


}