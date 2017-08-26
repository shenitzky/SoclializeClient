import NotificationsModule from './notifications'
import NotificationsController from './notifications.controller';
import NotificationsComponent from './notifications.component';
import NotificationsTemplate from './notifications.html';
import sinon from 'sinon';
import sinonAsPromised from 'sinon-as-promised';
import _ from 'lodash';

describe('Notifications', () => {
  let $rootScope, makeController,$q, $timeout,$stateParams,$state,moment,userDataService;
  
  beforeEach(window.module(NotificationsModule));
  beforeEach(inject((_$q_, _$timeout_, _$rootScope_) => {
    $rootScope = _$rootScope_;
    $q = _$q_;
    sinonAsPromised($q);
    $timeout = _$timeout_;
    
    userDataService = {
      updateUserExtraData:sinon.stub().resolves(),
      getUserOptionalMatch:sinon.stub().resolves(),
      getUserImg:sinon.stub().resolves()
    };
  
    $stateParams = {matchReqId:123,optionalMatch:321};
    
    makeController = () => {
      return new NotificationsController($stateParams,$state,moment,userDataService);
    };
  }));
  
  describe('Controller', () => {

    it('Should init controller',() => {
      let controller = makeController();
      controller.$onInit();
      expect(controller.matchReqId).to.be.equal(123);
      expect(controller.receiveMatchObject).to.be.equal(321);
    });
  
    it('Should get user img ',() => {
      let controller = makeController();
      controller.$onInit();
      controller._getUserImg();
      $timeout.flush();
      expect(controller.viewReady).to.be.equal(true);
    });
  
    it('Should notify Me',() => {
      let controller = makeController();
      controller.$onInit();
      controller.notifyMe();
      expect(controller.spawnNotification).to.be.called;
    });
    
  });
  
  describe('Component', () => {
    
    let component = NotificationsComponent;
    
    it('includes the intended template',() => {
      expect(component.template).to.equal(NotificationsTemplate);
    });
    
    it('invokes the right controller', () => {
      expect(component.controller).to.equal(NotificationsController);
    });
  });
});
