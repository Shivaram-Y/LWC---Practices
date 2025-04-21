trigger AccountTriggerforContacts on Account (after insert) {
    if(trigger.isAfter && Trigger.isInsert){
        system.enqueueJob(new ContractCreationQueueable(Trigger.New));
    }
}