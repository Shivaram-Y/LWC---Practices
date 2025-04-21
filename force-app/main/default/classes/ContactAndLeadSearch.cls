public class ContactAndLeadSearch {
 
    public static List<List< sObject>> searchContactsAndLeads(string LastName){
        
        List<List< sObject>> contactleadlist = [find :lastname in all fields 
                                               returning contact(name), lead(name)];
        return contactleadlist;
    }
}