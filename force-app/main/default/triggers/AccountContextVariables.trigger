trigger AccountContextVariables on Account (before insert, before update )
{
  System.debug('isExecuting:'+Trigger.isExecuting);
    System.debug('Size:'+Trigger.size);
    System.debug('Operation Type:'+Trigger.operationType);

}