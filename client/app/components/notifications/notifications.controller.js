const STATE = new WeakMap();
const USER_DATA_SERVICE = new WeakMap();

//todo need to check - first server need to provide if state params is empty && server response is empty then show no notifications

class NotificationsController {
  constructor($stateParams,$state,moment,userDataService){
    STATE.set(this,$state);
    USER_DATA_SERVICE.set(this,userDataService);
    this.viewReady = false;
    this.haveNotification = false;
    this.momentTime = moment;
    this.matchReqId = _.get($stateParams,'matchReqId',null);
    this.receiveMatchObject = _.get($stateParams,'optionalMatch',null);
  }
  
  
  $onInit(){
    _.isNull(this.matchReqId) ? this._checkOptionalMatchExistence() : this._setAndDrawOpMatch() ;
  }
  
  _setAndDrawOpMatch(){
    this._checkMatchExistence();
    this._getUserImg();
  }
  
  _checkOptionalMatchExistence(){
    USER_DATA_SERVICE.get(this).getUserOptionalMatch().then((optionalMatchData)=>{
      optionalMatchData  = _.get(optionalMatchData,'data',null);
      this.matchReqId    = _.get(optionalMatchData,'id',null);
      this.receiveMatchObject = optionalMatchData;
      this._setAndDrawOpMatch();
    });
  }
  
  //init match time and date - turning on notification
  _initMatch(){
    this.notificationNumber = 1;
    this.date = this.momentTime(this.receiveMatchObject.created).format("DD/MM");
    this.time = this.momentTime(this.receiveMatchObject.created).format("HH:mm");
    this.haveNotification = true;
  }
  
  _checkMatchExistence(){
    _.isEmpty(this.receiveMatchObject) ? this.haveNotification = false : this._initMatch();
  }
  
  _getUserImg(){
    USER_DATA_SERVICE.get(this).getUserImg().then((userImg) =>{
      this.userImg = _.get(userImg,'data');
      this.viewReady = true;
    });
  }
  //match found moving state with optional match
  matchFoundState(){
    STATE.get(this).go('matchFound',{'optionalMatch':this.receiveMatchObject,'time':this.time,'date':this.date,'matchReqId':this.matchReqId});
  }
  
}
NotificationsController.$inject = ['$stateParams','$state','moment','userDataService'];
export default NotificationsController;
