import UserProfileModule from './userProfile'
import UserProfileController from './userProfile.controller';
import UserProfileComponent from './userProfile.component';
import UserProfileTemplate from './userProfile.html';

import sinon from 'sinon';
import sinonAsPromised from 'sinon-as-promised';
import _ from 'lodash';

describe('UserProfile', () => {
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
  
  beforeEach(window.module(UserProfileModule));
  beforeEach(inject((_$q_, _$timeout_, _$rootScope_) => {
    $rootScope = _$rootScope_;
    $q = _$q_;
    sinonAsPromised($q);
    $timeout = _$timeout_;
    
    userDataService = {
      userRegister:sinon.stub().resolves(userData),
    };
  
    userDataService = {
      getUserData: sinon.stub().resolves({data:userData}),
      getUserOptionalMatch: sinon.stub().resolves(),
      updateUserData: sinon.stub().resolves()
    };
    
    factorsDataService = {
      getFactorData: sinon.stub().resolves({data:factorListData})
    };
    
    $state = {
      go: sinon.stub().resolves()
    };
    
    makeController = () => {
      return new UserProfileController($state,factorsDataService,userDataService);
    };
    
  }));
  
  describe('Controller', () => {
    it('Should create controller successfully', () => {
      let controller = makeController();
      controller.$onInit();
      $timeout.flush();
      expect(controller.factorsList).to.be.deep.equal(factorListData);
      expect(controller.user).to.be.deep.equal(userData);
    });
    it('Should send User Factors successfully', () => {
      let res = [
          {
            Class: 'Sport',
            SubClasses: {
              id: 0, name: 'Soccer', imgUrl: 'http://localhost:3000/Content/Images/icons/games.png', isToggle: true
            }
          },
        ];
      let controller = makeController();
      controller.$onInit();
      $timeout.flush();
      controller.sendUserFactors();
      expect(userDataService.updateUserData.calledWith(({'Data':res}))).to.be.false
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UserProfileComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UserProfileTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UserProfileController);
      });
  });
});

