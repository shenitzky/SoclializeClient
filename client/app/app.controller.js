/**
 * Created by Yossi on 14/04/2017.
 */
const STATE = new WeakMap();

class AppController {
  constructor($state) {
    STATE.set(this,$state);
  }
  
  $onInit() {
    this.user = true;
  }
}

AppController.$inject = ['$state'];
export default AppController;
