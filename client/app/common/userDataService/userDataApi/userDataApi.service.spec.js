import {ConnectionService} from '../../../common/connection/connection.factory';
import userDataApiService from './userDataApi.service';
import apiConsts from '../../../common/const/API'
import sinon from 'sinon';

describe('userData Api service', () => {
  let  service, makeService, connectionService;
  beforeEach(inject(() => {
    connectionService = new ConnectionService();
    connectionService.sendPlainText = sinon.stub().resolves('test');
    makeService = () => {
      return new userDataApiService(connectionService);
    };
    
    service = makeService();
  }));
  
  describe('Service', () => {
    
    it('getUserData', () => {
      service.getUserData();
      expect(connectionService.sendPlainText.withArgs({
        method: 'GET',
        url: apiConsts.userData,
      }).calledOnce).to.be.equal(true)
    });
    
    it('updateUserData', () => {
      service.updateUserData({data:'data'});
      expect(connectionService.sendPlainText.withArgs({
        method: 'POST',
        url: apiConsts.updateUserData,
        data:{data:'data'}
      }).calledOnce).to.be.equal(true)
    });
    
    
    it('getUserImg', () => {
      service.getUserImg();
      expect(connectionService.sendPlainText.withArgs({
        method: 'GET',
        url: apiConsts.getUserImg,
      }).calledOnce).to.be.equal(true)
    });
    
    it('userRegister', () => {
      service.userRegister({data:'data'});
      expect(connectionService.sendPlainText.withArgs({
        method: 'POST',
        url: apiConsts.userRegister,
        data:{data:'data'}
      }).calledOnce).to.be.equal(true)
    });
    
    it('userLogin', () => {
      service.userLogin({data:'data'});
      expect(connectionService.sendPlainText.withArgs({
        method: 'POST',
        url: apiConsts.userLogin,
        data:{data:'data'}
      }).calledOnce).to.be.equal(true)
    });
    
    it('getUserOptionalMatch', () => {
      service.getUserOptionalMatch();
      expect(connectionService.sendPlainText.withArgs({
        method: 'GET',
        url: apiConsts.getUserOptionalMatch,
      }).calledOnce).to.be.equal(true)
    });
  
    it('updateUserExtraData', () => {
      service.updateUserExtraData({data:'data'});
      expect(connectionService.sendPlainText.withArgs({
        method: 'POST',
        url: apiConsts.updateUserExtraData,
        data:{data:'data'}
      }).calledOnce).to.be.equal(true)
    });
    
  });
});
