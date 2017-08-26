import CheckOptionalMatchStatusModule from './checkOptionalMatchStatus'
import CheckOptionalMatchStatusController from './checkOptionalMatchStatus.controller';
import CheckOptionalMatchStatusComponent from './checkOptionalMatchStatus.component';
import CheckOptionalMatchStatusTemplate from './checkOptionalMatchStatus.html';
import sinon from 'sinon';
import sinonAsPromised from 'sinon-as-promised';
import _ from 'lodash';

describe('CheckOptionalMatchStatus', () => {
  let $rootScope, makeController,$q, $timeout,$stateParams,$state,matchDataService;
  
  let matchData = {
    data: {
      id:123
    }
  };
  
  beforeEach(window.module(CheckOptionalMatchStatusModule));
  beforeEach(inject((_$q_, _$timeout_, _$rootScope_) => {
    $rootScope = _$rootScope_;
    $q = _$q_;
    sinonAsPromised($q);
    $timeout = _$timeout_;
  
    $stateParams = {matchReqId: 1, optionalMatchId: 123};
    
    matchDataService = {
      getOptionalMatchStatus:sinon.stub().resolves(matchData),
    };
    
    makeController = () => {
      return new CheckOptionalMatchStatusController($state,$stateParams,matchDataService);
    };
  }));
  
  describe('Controller', () => {
    it('getOptionalMatchStatus',()=>{
      let controller = new makeController();
      expect(controller.optionalMatchId).to.be.equal(123);
      expect(matchDataService.getOptionalMatchStatus.calledWith(123,1));
    });
  });
  
  describe('Component', () => {
    // component/directive specs
    let component = CheckOptionalMatchStatusComponent;
    
    it('includes the intended template',() => {
      expect(component.template).to.equal(CheckOptionalMatchStatusTemplate);
    });
    
    it('invokes the right controller', () => {
      expect(component.controller).to.equal(CheckOptionalMatchStatusController);
    });
  });
});