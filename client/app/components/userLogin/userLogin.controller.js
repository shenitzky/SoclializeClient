const USER_DATA_SERVICE = new WeakMap();


class UserLoginController {
  constructor(userDataService) {
    USER_DATA_SERVICE.set(this,userDataService);
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
  
  sendLogin(){
    USER_DATA_SERVICE.get(this).userLogin(this.userLogin).then(data => this.user = false)
  }
}

UserLoginController.$inject = ['userDataService'];
export default UserLoginController;
