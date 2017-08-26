const STATE = new WeakMap();

class HomeController {
  constructor($state) {
    STATE.set(this, $state);
  }
  
  $onInit() {
    STATE.get(this).go('matchRequest');
  }
  
}

HomeController.$inject = ['$state'];
export default HomeController;
