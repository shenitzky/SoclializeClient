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
  
}
UserDataApiService.$inject = ['connection'];
export default UserDataApiService;