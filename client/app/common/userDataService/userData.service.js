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
    
    userRegister(data) {
      return USERDATA_API.get(this).userRegister(data);
    }
}
UserDataService.$inject = ['userDataApi'];
export default UserDataService;