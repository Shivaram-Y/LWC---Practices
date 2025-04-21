public with sharing class customLookupController {
    @AuraEnabled(cacheable=true)
    public static List<sObject> fetchLookupData(String searchKey, String objectApiName) {
        if (String.isBlank(searchKey)) {
            return new List<sObject>();
        }

        
        Set<String> allowedObjects = new Set<String>{'Account', 'Contact', 'Opportunity'}; // Add others as needed
        if (!allowedObjects.contains(objectApiName)) {
            throw new AuraHandledException('Unsupported object type: ' + objectApiName);
        }

        String key = '%' + searchKey + '%';
        String query = 'SELECT Id, Name FROM ' + objectApiName + ' WHERE Name LIKE :key ORDER BY Name LIMIT 5';
        return Database.query(query, AccessLevel.USER_MODE);
    }
}
