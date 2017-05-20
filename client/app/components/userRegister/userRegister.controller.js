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
  }

  sendRegistration(){
    USER_DATA_SERVICE.get(this).userRegister(this.userReg).then((data) => {
      //todo same logic as login component need to verify creation user.
      this.user = false;
      STATE.get(this).go('chooseHobbies');
    });
  }
  
  changeStateBackToLogin(){
    this.userRegister = false;
  }
  
}

UserRegisterController.$inject = ['$state','userDataService'];
export default UserRegisterController;
