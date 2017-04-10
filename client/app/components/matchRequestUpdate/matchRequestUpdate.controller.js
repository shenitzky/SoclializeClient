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
      console.log("HERE");
      MATCH_DATA_SERVICE.get(this).updateAndCheckMatchRequest(this.matchRequestObject).then((optionalMatchData)=>{
        optionalMatchData = _.get(optionalMatchData,'data');
        console.log("optionalMatchData",optionalMatchData);
        if(!_.isNull(optionalMatchData)) {
          STATE.get(this).go('notifications',{'optionalMatch':optionalMatchData});
        }
      },error=>{
        console.log("Error",error);
      });
    }, 1000);
  }
  
  $onDestroy(){
    clearInterval(this.interval);
  }
  
}
MatchRequestUpdateController.$inject = ['$state','$window','$stateParams','matchDataService'];
export default MatchRequestUpdateController;

