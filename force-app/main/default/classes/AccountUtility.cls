public class AccountUtility {
	
    public static void viewAnnualRevenue(){
        list<Account> accountsList = [SELECT Id, Name, AnnualRevenue FROM Account];
        for (Account acc: accountsList){
            string acctRev = acc.Name+ ':'+acc.AnnualRevenue;
            system.debug('acctRev'+acctRev);
        }
            
            }
}