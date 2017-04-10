const STATE = new WeakMap();

class NotificationsController {
  constructor($stateParams,$state,moment){
    STATE.set(this,$state);
    this.momentTime = moment;
    this.receiveMatchObject = _.get($stateParams,'optionalMatch');
  }
  
  $onInit(){
    this.notificationNumber = 1;
    this.date = this.momentTime(this.receiveMatchObject.created).format("DD/MM");
    this.time = this.momentTime(this.receiveMatchObject.created).format("HH:mm");
  }
  
  matchFoundState(){
    STATE.get(this).go('matchFound',{'optionalMatch':this.receiveMatchObject,'time':this.time,'date':this.date});
  }
  
}
NotificationsController.$inject = ['$stateParams','$state','moment'];
export default NotificationsController;
