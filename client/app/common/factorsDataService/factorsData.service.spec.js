import factorsDataService from './factorsData.service'
import sinon from 'sinon';


describe('factorsData service', () => {
  let service, makeController,factorDataApi;
  
  beforeEach(inject(() => {
  
    factorDataApi = {
      getFactorsData:    sinon.stub().resolves(true),
      getImagesForBubble: sinon.stub().resolves(true),
      addDynamicFactor:  sinon.stub().resolves(true),
      removeDynamicFactor:  sinon.stub().resolves(true)
      
    };
    
    makeController = () => {
      return new factorsDataService(factorDataApi);
    };
    service = makeController();
    
  }));
  
  describe('Init', () => {
    
    it('Should call getFactorData and return factors', () => {
      let controller = makeController();
      controller.getFactorData();
      expect(factorDataApi.getFactorData).to.be.called;
    });
    
    it('Should call getImagesForBubble and return images', () => {
      let controller = makeController();
      controller.getImagesForBubble();
      expect(factorDataApi.getImagesForBubble).to.be.called;
    });
  
  
    it('Should call addDynamicFactor and add dynamic factor', () => {
      let controller = makeController();
      controller.addDynamicFactor('test');
      expect(factorDataApi.addDynamicFactor.calledWith('test')).to.be.equal(true);
    });
  
    it('Should call removeDynamicFactor and remove dynamic factor', () => {
      let controller = makeController();
      controller.removeDynamicFactor('test');
      expect(factorDataApi.removeDynamicFactor.calledWith('test')).to.be.equal(true);
    });
    
  });
});