const STATE = new WeakMap();
const USER_DATA_SERVICE = new WeakMap();


class UserLoginController {
  constructor($state,userDataService) {
    USER_DATA_SERVICE.set(this,userDataService);
    STATE.set(this,$state);
    this.userRegister = false;
    this.authenticationError = false;
  }
  
  //Init user login object
  $onInit(){
    this.userLogin = {
      Email: '',
      Password: '',
      RememberMe: true
    };
  }
  
  //send login to server and set user from response
  sendLogin(){
    USER_DATA_SERVICE.get(this).userLogin(this.userLogin).then((data) => {
      this.user = _.get(data, "data.RedirectUrl",false);
      this.user = !_.isNull(this.user);
      this.authenticationError = !this.user;
      if(!this.user){
        STATE.get(this).go('matchRequest');
      }else {
        let errorMsg = _.get(data, "data.Error",null);
        this.authenticationError = !_.isNull(errorMsg);
        this.user = this.authenticationError;
      }
    },error=>{
      this.user = true;
      this.authenticationError = true;
    });
  }
  
  //back to login page
  userRegisterPage(userRegister){
    this.userRegister = !userRegister
  }
  
}

UserLoginController.$inject = ['$state','userDataService'];
export default UserLoginController;
