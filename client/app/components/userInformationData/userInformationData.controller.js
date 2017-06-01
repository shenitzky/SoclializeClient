const USER_DATA_SERVICE = new WeakMap();
const STATE = new WeakMap();

class UserInformationDataController {
  constructor($state,userDataService) {
    USER_DATA_SERVICE.set(this, userDataService);
    STATE.set(this,$state);
    this.name = 'userInformationData';
  }
  
  //init user information form
  $onInit(){
    this.userInformation = {
      FirstName:'',
      LastName: '',
      Description: '',
      Age:'',
      PhoneNumber:''
    }
  }
  
  //valid user information form if valid send to server and move to choose Hobbies
  validUserInformationForm(){
    this.invalid = [];
    _.forEach(this.userInformation, (filed)=>{
      this.invalid.push(_.isEqual(filed,''));
    });
    _.isUndefined(_.find(this.invalid, val => val === 'true')) ? this._sendUserInformationForm() : '';
  }
  
  //send user information to server
  _sendUserInformationForm(){
    USER_DATA_SERVICE.get(this).updateUserExtraData().then(()=>{
      STATE.get(this).go('chooseHobbies');
    });
  }
}

UserInformationDataController.$inject = ['$state', 'userDataService'];
export default UserInformationDataController;
