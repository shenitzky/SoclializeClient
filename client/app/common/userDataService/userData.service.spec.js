import userDataService from './userData.service'
import sinon from 'sinon';


describe('userData service', () => {
  let service, makeController,userDataApi;
  
  let data = {
    demo:'data'
  };
  
  beforeEach(inject(() => {
  
    userDataApi = {
      getUserData:    sinon.stub().resolves(true),
      updateUserData: sinon.stub().resolves(true),
      getUserImg:  sinon.stub().resolves(true),
      userRegister:  sinon.stub().resolves(true),
      userLogin:  sinon.stub().resolves(true),
      getUserOptionalMatch:  sinon.stub().resolves(true),
      updateUserExtraData:  sinon.stub().resolves(true)
    };
    
    makeController = () => {
      return new userDataService(userDataApi);
    };
    service = makeController();
    
  }));
  
  describe('Init', () => {
    
    it('Should call getUserData', () => {
      let controller = makeController();
      controller.getUserData();
      expect(userDataApi.getUserData).to.be.called;
    });
    
    it('Should call updateUserData', () => {
      let controller = makeController();
      controller.updateUserData(data);
      expect(userDataApi.updateUserData.calledWith(data)).to.be.equal(true);
    });
    
    
    it('Should call getUserImg', () => {
      let controller = makeController();
      controller.getUserImg();
      expect(userDataApi.getUserImg).to.be.called;
    });
    
    it('Should call userRegister', () => {
      let controller = makeController();
      controller.userRegister(data);
      expect(userDataApi.userRegister.calledWith(data)).to.be.equal(true);
    });
    
    it('Should call userLogin', () => {
      let controller = makeController();
      controller.userLogin(data);
      expect(userDataApi.userLogin.calledWith(data)).to.be.equal(true);
    });
  
    it('Should call getUserOptionalMatch', () => {
      let controller = makeController();
      controller.getUserOptionalMatch(data);
      expect(userDataApi.getUserOptionalMatch).to.be.called;
    });
    
    it('Should call updateUserExtraData', () => {
      let controller = makeController();
      controller.updateUserExtraData(data);
      expect(userDataApi.updateUserExtraData.calledWith(data)).to.be.equal(true);
    });
    
  });
});