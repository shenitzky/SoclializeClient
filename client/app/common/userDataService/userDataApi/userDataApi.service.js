const CONNECTION = new WeakMap();
import apiConsts from '../../../common/const/API'

export class UserDataApiService {

  constructor(connection) {
      CONNECTION.set(this, connection);
  }
  
  getUserData() {
      let obj = {method: 'GET', url: apiConsts.userData};
      return CONNECTION.get(this).sendPlainText(obj);
  }
  
  updateUserData(data) {
    let obj = {data: data,method: 'POST', url: apiConsts.updateUserData};
    return CONNECTION.get(this).sendPlainText(obj);
  }
  
  getUserImg() {
    let obj = {method: 'GET', url: apiConsts.getUserImg};
    return CONNECTION.get(this).sendPlainText(obj);
  }
  
  //todo move to a new service
  userRegister(data){
    let obj = {data: data,method: 'POST', url: apiConsts.userRegister};
    return CONNECTION.get(this).sendPlainText(obj);
  }
  
  userLogin(data){
    let obj = {data: data,method: 'POST', url: apiConsts.userLogin};
    return CONNECTION.get(this).sendPlainText(obj);
  }
  
  getUserOptionalMatch() {
    let obj = {method: 'GET', url: apiConsts.getUserOptionalMatch};
    return CONNECTION.get(this).sendPlainText(obj);
  }
  
}
UserDataApiService.$inject = ['connection'];
export default UserDataApiService;