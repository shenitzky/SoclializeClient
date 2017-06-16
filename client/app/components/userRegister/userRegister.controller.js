const USER_DATA_SERVICE = new WeakMap();
const STATE = new WeakMap();

class UserRegisterController {
  constructor($state,userDataService) {
    USER_DATA_SERVICE.set(this,userDataService);
    STATE.set(this,$state);
    this.name = 'userRegister';
  }

  $onInit(){
    this.authenticationError = false;
    this.userReg = {
      Email: '',
      Password: '',
      ConfirmPassword: ''
    };
  }

  sendRegistration(){
    USER_DATA_SERVICE.get(this).userRegister(this.userReg).then((data) => {
      this.user = _.get(data, "data.RedirectUrl",false);
      this.user = !_.isNull(this.user);
      this.authenticationError = !this.user;
      STATE.get(this).go('userInformationData');
    },error=>{
      this.user = true;
      this.authenticationError = true;
    });
  }
  
  changeStateBackToLogin(){
    this.userRegister = false;
  }
  
}

UserRegisterController.$inject = ['$state','userDataService'];
export default UserRegisterController;
