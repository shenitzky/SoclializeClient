const STATE = new WeakMap();
const USER_DATA_SERVICE = new WeakMap();
const MATCH_DATA_SERVICE = new WeakMap();

class MatchFoundController {
  constructor($stateParams,$state,userDataService,matchDataService) {
    STATE.set(this,$state);
    USER_DATA_SERVICE.set(this,userDataService);
    MATCH_DATA_SERVICE.set(this,matchDataService);
  
    this.viewReady = false;
    this.optionalMatch = _.get($stateParams,'optionalMatch');
    this.matchReqId = _.get($stateParams,'matchReqId');
    this.time = _.get($stateParams,'time');
    this.date = _.get($stateParams,'date');
    this.chipsArray = [];
    this._getUserImg();
  }
  
  $onInit(){
    _.forEach(this.optionalMatch.matchedDetails.description, (chips)=>{
      this.chipsArray.push(_.split(chips,','));
    });
    //todo remove this when server will remove duplicate
    this.chipsArray[2][3]='yossi';
  }
  
  _getUserImg(){
    USER_DATA_SERVICE.get(this).getUserImg().then((userImg) =>{
      this.userImg = _.get(userImg,'data');
      this.viewReady = true;
    });
  }
  
  acceptOptionalMatch(){
    STATE.get(this).go('checkOptionalMatchStatus',{'optionalMatchId': this.optionalMatch.id, 'matchReqId':this.matchReqId});
  }
  
  declineMatch(){
    MATCH_DATA_SERVICE.get(this).declineOptionalMatch({'optionalMatchId': this.optionalMatch.id, 'matchReqId':this.matchReqId});
    STATE.get(this).go('home');
  }
}

MatchFoundController.$inject = ['$stateParams','$state','userDataService','matchDataService'];
export default MatchFoundController;
