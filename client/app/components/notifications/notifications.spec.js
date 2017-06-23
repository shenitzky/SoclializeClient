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
    
    makeController = () => {
      return new NotificationsController($stateParams,$state,moment,userDataService,userDataService);
    };
  }));
  
  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });
  
  describe('Controller', () => {

  });
  
  describe('Component', () => {
    // component/directive specs
    let component = NotificationsComponent;
    
    it('includes the intended template',() => {
      expect(component.template).to.equal(NotificationsTemplate);
    });
    
    it('invokes the right controller', () => {
      expect(component.controller).to.equal(NotificationsController);
    });
  });
});
