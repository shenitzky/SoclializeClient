const STATE = new WeakMap();


class HomeController {
  constructor(userDataService,$state) {
    this.name = 'home';
    this.userDataServiceModuleTest = userDataService;
    this.userDataServiceModuleTest.getUserData().then((data)=>{

    });
    STATE.set(this,$state);
  }


  testClick(stateName){
    STATE.get(this).go(stateName);
  }


}


HomeController.$inject = ['userDataService','$state'];
export default HomeController;
