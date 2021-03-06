import UserLoginModule from './userLogin'
import UserLoginController from './userLogin.controller';
import UserLoginComponent from './userLogin.component';
import UserLoginTemplate from './userLogin.html';

import sinon from 'sinon';
import sinonAsPromised from 'sinon-as-promised';
import _ from 'lodash';

describe('UserLogin', () => {
  let $rootScope, makeController,$q, $timeout,$state,userDataService,factorsDataService;
  
  const userData = {
    id: "1143afed-6abc-4ef4-b42e-894720979b3a",
    mail: "xxx@gmail.com",
    firstName: "Yossi",
    lastName: "azoulay",
    description: null,
    imgUrl: "http://localhost:3000/content/images/icons/profile1.png",
    age: 10,
    premium: false,
    factors: [{
      id: 0,
      userId: null,
      class: "Sport",
      subClasses: [{
        id: 0,
        name: "Soccer",
        imgUrl: null
      }
      ]
    }]
  };
  
  

  
  const factorListData =
    [{
      id: 0,
      userId: null,
      class: "Sport",
      subClasses: [{
        id: 0,
        name: "Soccer",
        imgUrl: "http://localhost:3000/Content/Images/icons/games.png"
      },
        {
          id: 0,
          name: "Tennis3",
          imgUrl: "http://localhost:3000/Content/Images/icons/games.png"
        }]
    }];
  
  beforeEach(window.module(UserLoginModule));
  beforeEach(inject((_$q_, _$timeout_, _$rootScope_) => {
    $rootScope = _$rootScope_;
    $q = _$q_;
    sinonAsPromised($q);
    $timeout = _$timeout_;
    
    userDataService = {
      userLogin: sinon.stub().resolves({data:userData})
    };
  
    $state = {
      go: sinon.stub().returns()
    };
    
    makeController = () => {
      return new UserLoginController($state,userDataService);
    };
    
  }));
  
  
  describe('Controller', () => {
    
    it('Should create controller successfully', () => {
      let userLogin = {
        Email:'',
        Password: '',
        RememberMe: true
      };
      let controller = makeController();
      controller.$onInit();
      //$timeout.flush();
      expect(controller.userLogin).to.be.deep.equal(userLogin);
    });
  
    it('Should send Login successfully', () => {
      let userMockLoginData = {
          RedirectUrl: false
      };
      userDataService.userLogin = sinon.stub().resolves({data:userMockLoginData});
      let userLogin = {
        Email:'yossi@gamil.com',
        Password: 'yossi',
        RememberMe: true
      };
      let controller = makeController();
      controller.$onInit();
      controller.userLogin = _.clone(userLogin);
      controller.sendLogin();
      $timeout.flush();
      expect(controller.authenticationError).to.be.equal(false);
    });
  
    it('Should send Login and fail with error', () => {
      userDataService.userLogin = sinon.stub().resolves({});
      let userLogin = {
        Email:'yossi@gamil.com',
        Password: 'yossi',
        RememberMe: true
      };
      let controller = makeController();
      controller.$onInit();
      controller.userLogin = _.clone(userLogin);
      controller.sendLogin();
      $timeout.flush();
      expect(controller.authenticationError).to.be.equal(false);
    });
    
    
  });
  
  describe('Component', () => {
    
    let component = UserLoginComponent;
    
    it('includes the intended template',() => {
      expect(component.template).to.equal(UserLoginTemplate);
    });
    
    it('invokes the right controller', () => {
      expect(component.controller).to.equal(UserLoginController);
    });
  });
});






