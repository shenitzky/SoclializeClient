const USERDATA_API = new WeakMap();

export class UserDataService {
    constructor(userDataApi) {
        USERDATA_API.set(this, userDataApi);
    }

    getUserData() {
        return USERDATA_API.get(this).getUserData();
    }
  
    updateUserData(data) {
      return USERDATA_API.get(this).updateUserData(data);
    }
  
    getUserImg() {
      return USERDATA_API.get(this).getUserImg();
    }
    
    //todo move to a new service
    userRegister(data) {
      return USERDATA_API.get(this).userRegister(data);
    }
  
    userLogin(data) {
      return USERDATA_API.get(this).userLogin(data);
    }
    //todo need to use this
    getUserOptionalMatch() {
      return USERDATA_API.get(this).getUserOptionalMatch();
    }
  
}
UserDataService.$inject = ['userDataApi'];
export default UserDataService;