const MATCH_DATA_SERVICE = new WeakMap();
const STATE = new WeakMap();

class MatchRequestUpdateController {
  constructor($state,$window,$stateParams,matchDataService) {
    MATCH_DATA_SERVICE.set(this,matchDataService);
    STATE.set(this,$state);
    this.matchRequestObject = {
      'matchReqId': $stateParams.MatchRequestId,
      'location': $stateParams.location
    };
    this.name = 'matchRequestUpdate';
  }
  
  $onInit(){
    console.log(this.matchRequestObject);
    //Interval that update the server with matchRequestObject when receiving optionalMatchData moving to notifications.
    this.interval = setInterval(()=>{
      MATCH_DATA_SERVICE.get(this).updateAndCheckMatchRequest(this.matchRequestObject).then((optionalMatchData)=>{
        console.log("here",optionalMatchData);
        optionalMatchData = _.get(optionalMatchData,'data');
        if(!_.isNull(optionalMatchData)) {
          STATE.get(this).go('notifications',{'optionalMatch':optionalMatchData,'matchReqId':this.matchRequestObject.matchReqId});
        }
      },error=>{
        console.log("Error",error);
      });
    }, 100);
  }
  
  $onDestroy(){
    //Destroy interval.
    clearInterval(this.interval);
  }
  
}
MatchRequestUpdateController.$inject = ['$state','$window','$stateParams','matchDataService'];
export default MatchRequestUpdateController;

