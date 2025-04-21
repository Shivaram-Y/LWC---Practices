public class FirstQueueableJob implements Queueable{
    public void execute(QueueableCOntext Qcntxt)
    {
            delete [select id from contact where id = '0035g00001848gPAAQ'];
        
        //Chain jobs 1 & 2
        System.enqueueJob(new SecondQueueableJob());
    }    
}