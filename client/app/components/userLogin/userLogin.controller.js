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
      RememberMe: false
    };
    
    console.log("user from login ",this.user);
  }
  
  sendLogin(){
    debugger;
    USER_DATA_SERVICE.get(this).userRegister(this.userLogin).then(data => this.user = false)
  }
}

UserLoginController.$inject = ['userDataService'];
export default UserLoginController;
