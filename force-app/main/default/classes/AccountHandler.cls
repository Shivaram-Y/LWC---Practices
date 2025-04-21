public class AccountHandler {
    
    public static Account insertnewaccount(String AccountName){
        try {
            Account newacct = new Account(Name= AccountName);
            insert newacct;
            return newacct;
        } catch (dmlexception e){
            system.debug('A DML exception has occured: ' + e.getmessage());
            return null;
        }
    }

}