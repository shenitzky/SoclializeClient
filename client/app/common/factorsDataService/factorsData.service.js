const FACTORDATA_API = new WeakMap();

export class FactorDataService {
    constructor(factorDataApi) {
        FACTORDATA_API.set(this, factorDataApi);
    }

    getFactorData() {
        return FACTORDATA_API.get(this).getFactorsData();
    }


}
FactorDataService.$inject = ['factorDataApi'];
export default FactorDataService;