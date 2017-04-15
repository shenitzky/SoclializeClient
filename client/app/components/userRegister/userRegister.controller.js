const USER_DATA_SERVICE = new WeakMap();
const STATE = new WeakMap();

class UserRegisterController {
  constructor($state,userDataService) {
    USER_DATA_SERVICE.set(this,userDataService);
    STATE.set(this,$state);
    this.name = 'userRegister';
  }

  $onInit(){
    this.userReg = {
      Email: '',
      Password: '',
      ConfirmPassword: ''
    };
    console.log("user Register",this.user);
  }

  sendRegistration(){
    USER_DATA_SERVICE.get(this).userRegister(this.userReg).then(data => this.user = false);
  }
  
  changeStateBackToLogin(stateName){
    STATE.get(this).go(stateName);
  }
  
}

UserRegisterController.$inject = ['$state','userDataService'];
export default UserRegisterController;
