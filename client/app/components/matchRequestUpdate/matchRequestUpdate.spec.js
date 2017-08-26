import MatchRequestUpdateModule from './matchRequestUpdate'
import MatchRequestUpdateController from './matchRequestUpdate.controller';
import MatchRequestUpdateComponent from './matchRequestUpdate.component';
import MatchRequestUpdateTemplate from './matchRequestUpdate.html';
import sinon from 'sinon';
import sinonAsPromised from 'sinon-as-promised';

describe('MatchRequestUpdate', () => {
  let $rootScope, makeController,$q,$timeout,$state,$stateParams,matchDataServiceMock,setInterval;

  const matchRequestObjectMock = {
    matchReqId: 2,
    location: {
      lng: 30,
      lat: 30
    }
  };

  let optionalMatchData = {
    data: {
      matchRequestId: -1
    }
  };
  
  function interval(){}
  
  beforeEach(window.module(MatchRequestUpdateModule));
  beforeEach(inject((_$rootScope_,_$timeout_,_$q_) => {
    $q = _$q_;
    $rootScope = _$rootScope_;
    $timeout = _$timeout_;
    sinonAsPromised($q);

    matchDataServiceMock = {
      updateAndCheckMatchRequest: sinon.stub().resolves(optionalMatchData)
    };
  
    setInterval = interval();
    
    $stateParams = { MatchRequestId: -1,location:{lat:2,lan:3}};

    makeController = () => {
      return new MatchRequestUpdateController($state,$stateParams,matchDataServiceMock);
    };
  }));

  describe('Controller', () => {

    it('controller init', () => {
      let controller = makeController();
      expect(controller.optionalMatchNotFound).to.be.equal(false);
    });
  
    it('controller init', () => {
      let controller = makeController();
      controller.$onInit();
      expect(controller.setInterval).to.be.called;
    });
    
  });

  describe('Component', () => {
    
      let component = MatchRequestUpdateComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MatchRequestUpdateTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MatchRequestUpdateController);
      });
  });
});




