import MatchRequestModule from './matchRequest'
import MatchRequestController from './matchRequest.controller';
import MatchRequestComponent from './matchRequest.component';
import MatchRequestTemplate from './matchRequest.html';
import sinon from 'sinon';
import sinonAsPromised from 'sinon-as-promised';
import _ from 'lodash';

describe('MatchRequest', () => {
  let $rootScope, makeController,$q, $timeout,$window, $state, userDataService, matchDataService,$mdSidenav,factorsDataService,$stateParams,navigator;
  
  let userData = {
    data: {
      id: "1143afed-6abc-4ef4-b42e-894720979b3a",
      mail: "xxx@gmail.com",
      firstName: "Yossi",
      lastName: "azoulay",
      description: null,
      imgUrl: "http://localhost:3000/content/images/icons/profile1.png",
      age: 10,
      premium: false,
      factors: [
        {
          id: 0,
          userId: null,
          class: "Sport",
          subClasses: [
            {
              id: 0,
              name: "Soccer",
              imgUrl: null
            },
            {
              id: 0,
              name: "Tennis",
              imgUrl: null
            }
          ]
        }
      ]
    }
  };
  
  beforeEach(window.module(MatchRequestModule));
  beforeEach(inject((_$q_, _$timeout_, _$rootScope_) => {
    $rootScope = _$rootScope_;
    $q = _$q_;
    sinonAsPromised($q);
    $timeout = _$timeout_;
    
    userDataService = {
      getUserImg:sinon.stub().resolves(),
      getUserData:sinon.stub().resolves(userData),
      getUserOptionalMatch:sinon.stub().resolves(),
    };
  
    factorsDataService = {
      getImagesForBubble:sinon.stub().resolves()
    };
  
    matchDataService = {
      matchDataService:sinon.stub().resolves(),
      createMatchDataRequest:sinon.stub().resolves({})
    };
  
    $window = {
      navigator:{
        geolocation : {
          getCurrentPosition:sinon.stub().resolves()
        }
      }
    };
    
    $stateParams = {'optionalMatch': 123 , 'time': '18:00' , 'date': '1/1/2017', 'matchReqId': 1 };
    
    makeController = () => {
      return new MatchRequestController($window, $state, userDataService, matchDataService,$mdSidenav,factorsDataService);
    };
  }));
  
  
  describe('Controller', () => {

    it('Should make controller and verify integrity', () => {
      let controller = makeController();
      controller.$onInit();
      $timeout.flush();
      expect(controller.maxDistance).to.be.equal(26);
      expect(controller.matchPercent).to.be.equal(50);
      expect(controller.viewReady).to.be.equal(true);
    });
  
    it('Should valid Match Request', () => {
      let controller = makeController();
      controller.$onInit();
      $timeout.flush();
      controller.validMatchRequest();
      expect(controller.noFactorsError).to.be.equal(false);
      expect(matchDataService.createMatchDataRequest).to.be.calledOnce;
    });
  
    it('Should valid Match Request', () => {
      let controller = makeController();
      controller.$onInit();
      $timeout.flush();
      controller.validMatchRequest();
      expect(controller.noFactorsError).to.be.equal(false);
    });
    
    
  });
  
  describe('Component', () => {
    
    let component = MatchRequestComponent;
    
    it('includes the intended template',() => {
      expect(component.template).to.equal(MatchRequestTemplate);
    });
    
    it('invokes the right controller', () => {
      expect(component.controller).to.equal(MatchRequestController);
    });
  });
});
