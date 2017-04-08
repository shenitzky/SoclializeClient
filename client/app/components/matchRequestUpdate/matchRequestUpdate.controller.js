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
    setInterval(()=>{
      MATCH_DATA_SERVICE.get(this).updateAndCheckMatchRequest(this.matchRequestObject).then((optionalMatchData)=>{
        optionalMatchData = _.get(optionalMatchData,'data');
        STATE.get(this).go('notifications',{'optionalMatch':{'yossiTest':1234}});
        //it's false we have a match else do nothing.
        if(!_.isNull(optionalMatchData)) {
          //state.go to notifications with optional-match
        }
      },error=>{
        console.log("Error",error);
      });
    }, 10000);
  }
  
}
MatchRequestUpdateController.$inject = ['$state','$window','$stateParams','matchDataService'];
export default MatchRequestUpdateController;


//updateAndCheckMatchRequest