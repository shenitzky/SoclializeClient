const USER_DATA_SERVICE = new WeakMap();


class UserLoginController {
  constructor(userDataService) {
    USER_DATA_SERVICE.set(this,userDataService);
    this.name = 'userLogin';
  }
  
  
  $onInit(){
    this.userReg = {
      Email: '',
      Password: '',
      ConfirmPassword: ''
    };
    
    console.log("user",this.user);
    //this.user = false;
  }
  
  sendRegistration(){
    console.log("userReg",this.userReg);
    USER_DATA_SERVICE.get(this).userRegister(this.userReg)
  }
  
  
}

UserLoginController.$inject = ['userDataService'];
export default UserLoginController;
