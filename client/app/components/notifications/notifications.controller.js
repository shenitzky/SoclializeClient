class NotificationsController {
  constructor($stateParams){
    //debugger;
  }
  $onInit(){
    this.notificationNumber =5;
  }
}
NotificationsController.$inject = ['$stateParams'];
export default NotificationsController;
