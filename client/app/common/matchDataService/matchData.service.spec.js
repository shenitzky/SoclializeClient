import matchDataService from './matchData.service'
import sinon from 'sinon';


describe('matchData service', () => {
  let service, makeController,matchDataApi;
  
  let data = {
    demo:'data'
  };
  
  beforeEach(inject(() => {
  
    matchDataApi = {
      createMatchRequest:    sinon.stub().resolves(true),
      updateAndCheckMatcReq: sinon.stub().resolves(true),
      acceptOptionalMatch:  sinon.stub().resolves(true),
      declineOptionalMatch:  sinon.stub().resolves(true),
      getOptionalMatchStatus:  sinon.stub().resolves(true),
      getReverseGeocoding:  sinon.stub().resolves(true),
    };
    
    makeController = () => {
      return new matchDataService(matchDataApi);
    };
    service = makeController();
    
  }));
  
  describe('Init', () => {
    
    it('Should call createMatchDataRequest', () => {
      let controller = makeController();
      controller.createMatchDataRequest(data);
      expect(matchDataApi.createMatchRequest.calledWith(data)).to.be.equal(true);
    });
    
    it('Should call updateAndCheckMatchRequest', () => {
      let controller = makeController();
      controller.updateAndCheckMatchRequest(data);
      expect(matchDataApi.updateAndCheckMatcReq.calledWith(data)).to.be.equal(true);
    });
    
    
    it('Should call acceptOptionalMatch', () => {
      let controller = makeController();
      controller.acceptOptionalMatch(data);
      expect(matchDataApi.acceptOptionalMatch.calledWith(data)).to.be.equal(true);
    });
    
    it('Should call declineOptionalMatch', () => {
      let controller = makeController();
      controller.declineOptionalMatch(data);
      expect(matchDataApi.declineOptionalMatch.calledWith(data)).to.be.equal(true);
    });
  
    it('Should call getOptionalMatchStatus', () => {
      let controller = makeController();
      let optionalMatchId = 123;
      let matchReqId = 321;
      controller.getOptionalMatchStatus(optionalMatchId,matchReqId);
      expect(matchDataApi.getOptionalMatchStatus.calledWith(optionalMatchId,matchReqId)).to.be.equal(true);
    });
  
  
    it('Should call getReverseGeocoding', () => {
      let controller = makeController();
      let latitude = 123;
      let longitude = 321;
      controller.getReverseGeocoding(latitude ,longitude);
      expect(matchDataApi.getReverseGeocoding.calledWith(latitude ,longitude)).to.be.equal(true);
    });
    
  });
});