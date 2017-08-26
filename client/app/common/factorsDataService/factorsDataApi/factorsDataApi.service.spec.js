import {ConnectionService} from '../../../common/connection/connection.factory';
import factorsDataApi from './factorsDataApi.service';
import apiConsts from '../../../common/const/API'
import sinon from 'sinon';

describe('factorsDataApi Api service', () => {
  let  service, makeService, connectionService;
  beforeEach(inject(() => {
    connectionService = new ConnectionService();
    connectionService.sendPlainText = sinon.stub().resolves('yossi');
    makeService = () => {
      return new factorsDataApi(connectionService);
    };
    
    service = makeService();
  }));
  
  describe('Service', () => {
    it('getFactorsData', () => {
      service.getFactorsData();
      expect(connectionService.sendPlainText.withArgs({
        method: 'GET',
        url: apiConsts.factors
      }).calledOnce).to.be.equal(true)
    });
  
    it('getImagesForBubble', () => {
      service.getImagesForBubble();
      expect(connectionService.sendPlainText.withArgs({
        method: 'GET',
        url: apiConsts.getImagesForBubble
      }).calledOnce).to.be.equal(true)
    });
  
  
    it('getEmailTemplate', () => {
      service.getFactorsData();
      expect(connectionService.sendPlainText.withArgs({
        method: 'GET',
        url: apiConsts.factors
      }).calledOnce).to.be.equal(true)
    });
  
    it('addDynamicFactor', () => {
      service.addDynamicFactor('test');
      expect(connectionService.sendPlainText.withArgs({
        method: 'GET',
        url: apiConsts.addDynamicFactor('test')
      }).calledOnce).to.be.equal(true)
    });
  
  
    it('removeDynamicFactor', () => {
      service.removeDynamicFactor('test');
      expect(connectionService.sendPlainText.withArgs({
        method: 'GET',
        url: apiConsts.removeDynamicFactor('test')
      }).calledOnce).to.be.equal(true)
    });
    
  });
});
