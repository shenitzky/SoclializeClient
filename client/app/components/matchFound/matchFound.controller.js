const STATE = new WeakMap();

class MatchFoundController {
  constructor($stateParams,$state) {
    STATE.set(this,$state);
    this.optionalMatch = _.get($stateParams,'optionalMatch');
    this.matchReqId = _.get($stateParams,'matchReqId');
    this.time = _.get($stateParams,'time');
    this.date = _.get($stateParams,'date');
    this.chipsArray = [];
  }
  
  $onInit(){
    _.forEach(this.optionalMatch.matchedDetails.description, (chips)=>{
      this.chipsArray.push(_.split(chips,','));
    });
    //todo remove this when server will remove duplicate
    this.chipsArray[2][3]='yossi';
  }
  
  acceptOptionalMatch(){
    STATE.get(this).go('checkOptionalMatchStatus',{'optionalMatchId': this.optionalMatch.id, 'matchReqId':this.matchReqId});
  }
  
  declineOptionalMatch(){
  
  }
  
}

MatchFoundController.$inject = ['$stateParams','$state'];
export default MatchFoundController;
