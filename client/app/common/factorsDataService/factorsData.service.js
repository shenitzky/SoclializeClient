const FACTORDATA_API = new WeakMap();

export class FactorDataService {
    constructor(factorDataApi) {
        FACTORDATA_API.set(this, factorDataApi);
    }

    getFactorData() {
        return FACTORDATA_API.get(this).getFactorsData();
    }
  
    getImagesForBubble() {
      return FACTORDATA_API.get(this).getImagesForBubble();
    }
  
    addDynamicFactor(factorName) {
      return FACTORDATA_API.get(this).addDynamicFactor(factorName);
    }
  
    removeDynamicFactor(factorNameToRemove) {
      return FACTORDATA_API.get(this).removeDynamicFactor(factorNameToRemove);
    }
  
}
FactorDataService.$inject = ['factorDataApi'];
export default FactorDataService;