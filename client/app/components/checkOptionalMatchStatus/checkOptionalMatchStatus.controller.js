const STATE = new WeakMap();
const MATCH_DATA_SERVICE = new WeakMap();

class CheckOptionalMatchStatusController {
  constructor($state,$stateParams,matchDataService) {
    MATCH_DATA_SERVICE.set(this,matchDataService);
    STATE.set(this,$state);
    this.matchReqId      = $stateParams.matchReqId;
    this.optionalMatchId = $stateParams.optionalMatchId;
  }
  
  $onInit(){
    this.interval = setInterval(()=>{
      MATCH_DATA_SERVICE.get(this).getOptionalMatchStatus(this.optionalMatchId,this.matchReqId).then((matchData)=>{
        matchData = _.get(matchData,'data');
        if(!_.isNull(matchData)) {
          STATE.get(this).go('mapHandler',{ 'matchData':matchData });
        }
      },error=>{
        console.log("Error",error);
      });
    }, 8000);
  }
  
  $onDestroy(){
    clearInterval(this.interval);
  }
  
}


CheckOptionalMatchStatusController.$inject = ['$state','$stateParams','matchDataService'];
export default CheckOptionalMatchStatusController;
