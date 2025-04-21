public class ContactSearch {

    public static list<Contact> searchForContacts(string lastname, string postalcode)
    {  
        list<Contact> Contacts = [select id,name from Contact where lastname=:lastname and MailingPostalCode=:postalcode];
        return Contacts;
    }
}