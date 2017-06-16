const MATCH_DATA_SERVICE = new WeakMap();
const STATE = new WeakMap();

class MatchRequestUpdateController {
  constructor($state,$stateParams,matchDataService) {
    MATCH_DATA_SERVICE.set(this,matchDataService);
    STATE.set(this,$state);
    this.matchRequestObject = {
      'matchReqId': $stateParams.MatchRequestId,
      'location': $stateParams.location
    };
    this.optionalMatchNotFound = false;
    this.name = 'matchRequestUpdate';
  }
  
  $onInit(){
    //Interval that update the server with matchRequestObject when receiving optionalMatchData moving to notifications.
    this.interval = setInterval(()=>{
      MATCH_DATA_SERVICE.get(this).updateAndCheckMatchRequest(this.matchRequestObject).then((optionalMatchData)=>{
        optionalMatchData = _.get(optionalMatchData,'data');
        if(!_.isNull(optionalMatchData)) {
          if(_.get(optionalMatchData,'matchRequestId',-1) === -1 ) {
            this.optionalMatchNotFound = true;
            this.$onDestroy();
          }
          
          STATE.get(this).go('notifications',{'optionalMatch':optionalMatchData,'matchReqId':this.matchRequestObject.matchReqId});
        }
      },error=>{
        console.log("Error",error);
      });
    }, 5000);
  }
  
  //Change state
  moveToCreateMacth(){
    STATE.get(this).go('matchRequest');
  }
  
  $onDestroy(){
    //Destroy interval.
    clearInterval(this.interval);
  }
  
}
MatchRequestUpdateController.$inject = ['$state','$stateParams','matchDataService'];
export default MatchRequestUpdateController;

