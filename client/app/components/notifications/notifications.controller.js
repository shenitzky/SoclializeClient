const STATE = new WeakMap();
const USER_DATA_SERVICE = new WeakMap();

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
  
  //Draw Match notification plus user Image
  _setAndDrawOpMatch(){
    this._checkMatchExistence();
    this._getUserImg();
  }
  
  _checkOptionalMatchExistence(){
    USER_DATA_SERVICE.get(this).getUserOptionalMatch().then((optionalMatchData)=>{
      optionalMatchData  = _.get(optionalMatchData,'data',null);
      this.matchReqId    = _.get(optionalMatchData,'matchRequestId',null);
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
    this.notifyMe();
  }
  
  //check Match Existence and validation
  _checkMatchExistence(){
    (_.isEmpty(this.receiveMatchObject) || this.matchReqId === -1) ? this.haveNotification = false : this._initMatch();
  }
  
  //getting user current image
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
  
  //found match notify user
  notifyMe() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      console.log("This browser does not support system notifications");
    }
    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      let notification = this.spawnNotification("You Have a match!",'content/images/icons/logo.png','Socialize')
    }
  }
  
  //build massage and icons to user
  spawnNotification(theBody,theIcon,theTitle) {
    let options = {
      body: theBody,
      icon: theIcon
    };
    let n = new Notification(theTitle,options);
    setTimeout(n.close.bind(n), 5000);
  }
  
}
NotificationsController.$inject = ['$stateParams','$state','moment','userDataService'];
export default NotificationsController;
