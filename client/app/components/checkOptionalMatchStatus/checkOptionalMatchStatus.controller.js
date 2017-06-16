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
    this.otherUserDecline = false;
    //Check for optinal match
    this.interval = setInterval(()=>{
      MATCH_DATA_SERVICE.get(this).getOptionalMatchStatus(this.optionalMatchId,this.matchReqId).then((matchData)=>{
        matchData = _.get(matchData,'data');
        //If match Data is not empty then I check
        if(!_.isNull(matchData)) {
          //If other side accepted moving state with params
          if (matchData.isAccepted) {
            STATE.get(this).go('mapHandler', {'matchData': matchData});
          } else {
            this.otherUserDecline = true;
            //If other side decline destroy interval
            this.$onDestroy();
          }
        }
      },error=>{
        //On error from server
        console.log("Error",error);
      });
    }, 5000);
  }
  
  $onDestroy(){
    //Clear Interval
    clearInterval(this.interval);
  }
}

CheckOptionalMatchStatusController.$inject = ['$state','$stateParams','matchDataService'];
export default CheckOptionalMatchStatusController;
