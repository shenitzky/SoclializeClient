// const USER_DATA_SERVICE = new WeakMap();
//
//
// class UserRegisterController {
//   constructor(userDataService) {
//     USER_DATA_SERVICE.set(this,userDataService);
//     this.name = 'userRegister';
//   }
//
//
//   $onInit(){
//
//     this.userReg = {
//       Email: '',
//       Password: '',
//       ConfirmPassword: ''
//     };
//
//     console.log("user",this.user);
//     //this.user = false;
//   }
//
//   sendRegistration(){
//     debugger;
//     console.log("userReg",this.userReg);
//     USER_DATA_SERVICE.get(this).userRegister(this.userReg)
//   }
//
//
// }
//
// UserRegisterController.$inject = ['userDataService'];
// export default UserRegisterController;
