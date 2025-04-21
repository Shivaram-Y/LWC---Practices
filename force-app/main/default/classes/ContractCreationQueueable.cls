public class ContractCreationQueueable implements Queueable{
    
    private list<account> accListtocreatecontacts;
    
    public contractcreationqueueable(List<Account> expectingAccountsfromTrigger){
        
        this.accListtocreatecontacts = expectingAccountsfromTrigger;
    }
    public void execute(QueueableContext qcntxt){
       list<contact> conlisttoInsert = new List<Contact>();
        for(Account acc: accListtocreatecontacts){
            contact con = new contact( );
            con.LastName=acc.Name;
            con.AccountId=acc.Id;
            conlisttoInsert.add(con);
            
        }
        if(conlisttoInsert.size()>0)
        insert conlisttoInsert;
    }
}