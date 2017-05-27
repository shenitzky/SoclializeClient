const STATE = new WeakMap();
const USER_DATA_SERVICE = new WeakMap();
const MATCH_DATA_SERVICE = new WeakMap();

class MatchFoundController {
  constructor($stateParams,$state,userDataService,matchDataService,moment) {
    STATE.set(this,$state);
    USER_DATA_SERVICE.set(this,userDataService);
    MATCH_DATA_SERVICE.set(this,matchDataService);
    this.momentTime = moment;
    this.viewReady = false;
    this.optionalMatch = _.get($stateParams,'optionalMatch',null);
    this.matchReqId = _.get($stateParams,'matchReqId',null);
    this.time = _.get($stateParams,'time',null);
    this.date = _.get($stateParams,'date',null);
    this.chipsArray = [];
    this._getUserImg();
  }
  
  //Init the chip description
  $onInit(){
    //checking if optional match is empty
    _.isNull(this.optionalMatch) ? this._checkOptinalMatchExistence() : this._setChipMatch() ;
  }
  
  _setChipMatch(){
    _.forEach(this.optionalMatch.matchedDetails.description, (chips)=>{
      this.chipsArray.push(_.split(chips,','));
    });
  }
  
  //Checking if there is already existing match if so data will be taken from it.
  _checkOptinalMatchExistence(){
    USER_DATA_SERVICE.get(this).getUserOptionalMatch().then((optionalMatchData)=>{
      optionalMatchData  = _.get(optionalMatchData,'data',null);
      this.optionalMatch = optionalMatchData;
      this.matchReqId    = _.get(optionalMatchData,'id',null);
      this.date = this.momentTime(optionalMatchData.created).format("DD/MM");
      this.time = this.momentTime(optionalMatchData.created).format("HH:mm");
      debugger;
      this._setChipMatch();
    })
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

MatchFoundController.$inject = ['$stateParams','$state','userDataService','matchDataService','moment'];
export default MatchFoundController;
