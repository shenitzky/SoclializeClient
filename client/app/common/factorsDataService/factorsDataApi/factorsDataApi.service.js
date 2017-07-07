const CONNECTION = new WeakMap();
import apiConsts from '../../../common/const/API'

export class FactorsDataApiService {

    constructor(connection) {
        CONNECTION.set(this, connection);
    }

    getFactorsData() {
        let obj = {method: 'GET', url: apiConsts.factors};
        return CONNECTION.get(this).sendPlainText(obj);
    }
  
    getImagesForBubble() {
      let obj = {method: 'GET', url: apiConsts.getImagesForBubble};
      return CONNECTION.get(this).sendPlainText(obj);
    }
  
  addDynamicFactor(factorName) {
    let obj = {method: 'GET', url: apiConsts.addDynamicFactor(factorName)};
    return CONNECTION.get(this).sendPlainText(obj);
  }
  
  removeDynamicFactor(factorNameToRemove) {
    let obj = {method: 'GET', url: apiConsts.removeDynamicFactor(factorNameToRemove)};
    return CONNECTION.get(this).sendPlainText(obj);
  }
  
}
FactorsDataApiService.$inject = ['connection'];
export default FactorsDataApiService;