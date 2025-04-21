trigger AccountTrigger on Account (before insert, before update ) 
{
   
for (account record : Trigger.new)
{
    if (string.isBlank(record.Phone))
    {
        record.addError('PHONE IS empty');
    }
}
   // system.debug('Account Trigger 1');
}