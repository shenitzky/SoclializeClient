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
    this.interval = setInterval(()=>{
      console.log("interval match request update alive");
      MATCH_DATA_SERVICE.get(this).updateAndCheckMatchRequest(this.matchRequestObject).then((optionalMatchData)=>{
        optionalMatchData = _.get(optionalMatchData,'data');
        if(!_.isNull(optionalMatchData)) {
          STATE.get(this).go('notifications',{'optionalMatch':optionalMatchData,'matchReqId':this.matchRequestObject.matchReqId});
        }
      },error=>{
        console.log("Error",error);
      });
    }, 10000);
  }
  
  $onDestroy(){
    clearInterval(this.interval);
    console.log("interval match request update dead");
  }
  
}
MatchRequestUpdateController.$inject = ['$state','$window','$stateParams','matchDataService'];
export default MatchRequestUpdateController;

