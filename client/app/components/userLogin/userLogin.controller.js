const STATE = new WeakMap();
const USER_DATA_SERVICE = new WeakMap();


class UserLoginController {
  constructor($state,userDataService) {
    USER_DATA_SERVICE.set(this,userDataService);
    STATE.set(this,$state);
    this.name = 'userLogin';
    this.userRegister = false;
  }
  
  $onInit(){
    this.userLogin = {
      Email: '',
      Password: '',
      RememberMe: true
    };
    
    console.log("user from login ",this.user);
  }
  
  //todo error handler
  sendLogin(){
    USER_DATA_SERVICE.get(this).userLogin(this.userLogin).then((data) => {
      this.user = false;
      STATE.get(this).go('chooseHobbies');
    });
  }
}

UserLoginController.$inject = ['$state','userDataService'];
export default UserLoginController;
