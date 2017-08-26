import MatchFoundModule from './matchFound'
import MatchFoundController from './matchFound.controller';
import MatchFoundComponent from './matchFound.component';
import MatchFoundTemplate from './matchFound.html';
import sinon from 'sinon';
import sinonAsPromised from 'sinon-as-promised';
import _ from 'lodash';

describe('MatchFound', () => {
  let $rootScope, makeController,$q, $timeout,$state,userDataService,matchDataService,$stateParams;

  beforeEach(window.module(MatchFoundModule));
  beforeEach(inject((_$q_, _$timeout_, _$rootScope_) => {
    $rootScope = _$rootScope_;
    $q = _$q_;
    sinonAsPromised($q);
    $timeout = _$timeout_;
  
    userDataService = {
      getUserImg:sinon.stub().resolves(),
    }
    
    $stateParams = {'optionalMatch': 123 , 'time': '18:00' , 'date': '1/1/2017', 'matchReqId': 1 };
    
    makeController = () => {
      return new MatchFoundController($stateParams,$state,userDataService,matchDataService);
    };
  }));
  
  describe('Controller', () => {
    // controller specs
    it('Should _getUserImg and set view ready', () => {
      let controller = makeController();
      controller._getUserImg();
      $timeout.flush();
      expect(controller.viewReady).to.be.equal(true);
    });
    
    
    
  });
  
  describe('Component', () => {
      // component/directive specs
      let component = MatchFoundComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MatchFoundTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MatchFoundController);
      });
  });
});
