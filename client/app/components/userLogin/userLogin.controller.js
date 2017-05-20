const STATE = new WeakMap();
const USER_DATA_SERVICE = new WeakMap();


class UserLoginController {
  constructor($state,userDataService) {
    USER_DATA_SERVICE.set(this,userDataService);
    STATE.set(this,$state);
    this.name = 'userLogin';
    this.userRegister = false;
    this.authenticationError = false;
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
      debugger;
      //this.user = false;
      //todo need to add this authenticationError to server
      this.user = data.data.authentication;
      this.authenticationError = data.data.authentication;
      STATE.get(this).go('matchRequest');
    },error=>{
      this.user = true;
      this.authenticationError = true;
    });
  }
  
  userRegisterPage(userRegister){
    this.userRegister = !userRegister
  }
  
}

UserLoginController.$inject = ['$state','userDataService'];
export default UserLoginController;
