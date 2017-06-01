import UserRegisterModule from './userRegister'
import UserRegisterController from './userRegister.controller';
import UserRegisterComponent from './userRegister.component';
import UserRegisterTemplate from './userRegister.html';
import sinon from 'sinon';
import sinonAsPromised from 'sinon-as-promised';
import _ from 'lodash';

describe('UserRegister', () => {
  let $rootScope, makeController,$q, $timeout,$state,userDataService;
  
  let userReg = {
    Email: '',
    Password: '',
    ConfirmPassword: ''
  };
  
  const userData = {
    RedirectUrl : true
  };
  
  beforeEach(window.module(UserRegisterModule));
  beforeEach(inject((_$q_, _$timeout_, _$rootScope_) => {
    $rootScope = _$rootScope_;
    $q = _$q_;
    sinonAsPromised($q);
    $timeout = _$timeout_;
    
    userDataService = {
      userRegister:sinon.stub().resolves(userData),
    };
    
    $state = {
      go: sinon.stub().resolves()
    };
    
    makeController = () => {
      return new UserRegisterController($state,userDataService);
    };
    
  }));
  
  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });
  
  describe('Controller', () => {
    it('Should create controller successfully', () => {
      let controller = makeController();
      controller.$onInit();
      expect(controller.userReg).to.be.deep.equal(userReg);
    });
  
    it('Should send Registration successfully', () => {
      let controller = makeController();
      controller.$onInit();
      controller.userReg.Email = "yossi@gmail.com";
      controller.userReg.Password = "abcd1234";
      controller.userReg.ConfirmPassword = "abcd1234";
      controller.sendRegistration();
      $timeout.flush();
      expect(controller.user).to.be.true
    });
    
  });

  describe('Component', () => {
      // component/directive specs
      let component = UserRegisterComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UserRegisterTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UserRegisterController);
      });
  });
});
