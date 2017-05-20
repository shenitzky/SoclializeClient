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
  
  //Init the chip description
  $onInit(){
    _.forEach(this.optionalMatch.matchedDetails.description, (chips)=>{
      this.chipsArray.push(_.split(chips,','));
    });
  }
  
  //Set user image and set view Html
  _getUserImg(){
    USER_DATA_SERVICE.get(this).getUserImg().then((userImg) =>{
      this.userImg = _.get(userImg,'data');
      this.viewReady = true;
    });
  }
  //Posting to server acceptOptionalMatchBtn and moving state with the right params.
  acceptOptionalMatchBtn(){
    MATCH_DATA_SERVICE.get(this).acceptOptionalMatch({'optionalMatchId': this.optionalMatch.id, 'matchReqId':this.matchReqId}).then(()=>{
      STATE.get(this).go('checkOptionalMatchStatus',{'optionalMatchId': this.optionalMatch.id, 'matchReqId':this.matchReqId});
    });
  }
  
  //Posting to server decline match to server and moving back to find match state
  declineMatch(){
    MATCH_DATA_SERVICE.get(this).declineOptionalMatch({'optionalMatchId': this.optionalMatch.id, 'matchReqId':this.matchReqId});
    STATE.get(this).go('matchRequest');
  }
}

MatchFoundController.$inject = ['$stateParams','$state','userDataService','matchDataService'];
export default MatchFoundController;
