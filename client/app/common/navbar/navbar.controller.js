const STATE = new WeakMap();

class NavbarController {
  constructor($state) {
    STATE.set(this,$state);
  }
  
  changeStateHomeOnClick(goHome){
    STATE.get(this).go(goHome);
  }
}
NavbarController.$inject = ['$state'];
export default NavbarController;
