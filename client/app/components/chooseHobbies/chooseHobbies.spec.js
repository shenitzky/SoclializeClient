import ChooseHobbiesModule from './chooseHobbies'
import ChooseHobbiesController from './chooseHobbies.controller';
import ChooseHobbiesComponent from './chooseHobbies.component';
import ChooseHobbiesTemplate from './chooseHobbies.html';

import sinon from 'sinon';
import sinonAsPromised from 'sinon-as-promised';
import _ from 'lodash';

describe('ChooseHobbies', () => {
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
  
  
  beforeEach(window.module(ChooseHobbiesModule));
  beforeEach(inject((_$q_, _$timeout_, _$rootScope_) => {
    $rootScope = _$rootScope_;
    $q = _$q_;
    sinonAsPromised($q);
    $timeout = _$timeout_;
    
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
      return new ChooseHobbiesController($state,userDataService,factorsDataService);
    };
    
  }));
  
  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });
  
  describe('Controller', () => {

  });
  
  describe('Component', () => {
    // component/directive specs
    let component = ChooseHobbiesComponent;
    
    it('includes the intended template',() => {
      expect(component.template).to.equal(ChooseHobbiesTemplate);
    });
    
    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ChooseHobbiesController);
    });
  });
});

