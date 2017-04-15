/**
 * Created by Yossi on 14/04/2017.
 */
const STATE = new WeakMap();

class AppController {
  constructor($state,$window) {
    STATE.set(this,$state);
  }
  
  $onInit(){
    this.user = false;
  }
}

AppController.$inject = ['$state','$window'];
export default AppController;
