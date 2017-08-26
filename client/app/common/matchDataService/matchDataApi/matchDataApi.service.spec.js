import {ConnectionService} from '../../../common/connection/connection.factory';
import matchDataApiService from './matchDataApi.service';
import apiConsts from '../../../common/const/API'
import sinon from 'sinon';

describe('matchData Api service', () => {
  let  service, makeService, connectionService;
  beforeEach(inject(() => {
    connectionService = new ConnectionService();
    connectionService.sendPlainText = sinon.stub().resolves('test');
    makeService = () => {
      return new matchDataApiService(connectionService);
    };
    
    service = makeService();
  }));
  
  describe('Service', () => {
    
    it('createMatchRequest', () => {
      service.createMatchRequest({data:'data'});
      expect(connectionService.sendPlainText.withArgs({
        method: 'POST',
        url: apiConsts.createMatcReq,
        data:{data:'data'}
      }).calledOnce).to.be.equal(true)
    });
    
    it('updateAndCheckMatcReq', () => {
      service.updateAndCheckMatcReq({data:'data'});
      expect(connectionService.sendPlainText.withArgs({
        method: 'POST',
        url: apiConsts.updateAndCheckMatcReq,
        data:{data:'data'}
      }).calledOnce).to.be.equal(true)
    });
    
    
    it('acceptOptionalMatch', () => {
      service.acceptOptionalMatch({data:'data'});
      expect(connectionService.sendPlainText.withArgs({
        method: 'POST',
        url: apiConsts.acceptOptionalMatch,
        data:{data:'data'}
      }).calledOnce).to.be.equal(true)
    });
  
    it('declineOptionalMatch', () => {
      service.declineOptionalMatch({data:'data'});
      expect(connectionService.sendPlainText.withArgs({
        method: 'POST',
        url: apiConsts.declineOptionalMatch,
        data:{data:'data'}
      }).calledOnce).to.be.equal(true)
    });
  
    it('getOptionalMatchStatus', () => {
      service.getOptionalMatchStatus(123,321);
      expect(connectionService.sendPlainText.withArgs({
        method: 'GET',
        url: apiConsts.getOptionalMatchStatus(123,321),
      }).calledOnce).to.be.equal(true)
    });
  
    it('getOptionalMatchStatus', () => {
      service.getReverseGeocoding(33.322,3.421);
      expect(connectionService.sendPlainText.withArgs({
        method: 'GET',
        url: apiConsts.getReverseGeocoding(33.322,3.421),
      }).calledOnce).to.be.equal(true)
    });

  });
});
