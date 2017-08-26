import UserInformationDataModule from './userInformationData'
import UserInformationDataController from './userInformationData.controller';
import UserInformationDataComponent from './userInformationData.component';
import UserInformationDataTemplate from './userInformationData.html';
import sinon from 'sinon';
import sinonAsPromised from 'sinon-as-promised';
import _ from 'lodash';

describe('UserInformationData', () => {
  let $rootScope, makeController,$q, $timeout,$state,userDataService;
  
  beforeEach(window.module(UserInformationDataModule));
  beforeEach(inject((_$q_, _$timeout_, _$rootScope_) => {
    $rootScope = _$rootScope_;
    $q = _$q_;
    sinonAsPromised($q);
    $timeout = _$timeout_;
    
    userDataService = {
      updateUserExtraData:sinon.stub().resolves(),
    };
    
    makeController = () => {
      return new UserInformationDataController($state,userDataService);
    };
  }));
  
  describe('Controller', () => {
    it('Should valid user information and fail',()=>{
      let controller = makeController();
      controller.$onInit();
      controller.validUserInformationForm();
      expect(controller.invalid).to.be.deep.equal([ true, true, true, true, true]);
    });
    
    it('Should valid user information success',()=>{
      let controller = makeController();
      controller.$onInit();
      controller.userInformation = {
        FirstName: 'yossi',
        LastName: 'azoulay',
        Description: 'yossi test ',
        Age:'28',
        PhoneNumber:'052'
      }
      controller.validUserInformationForm();
      expect(controller._sendUserInformationForm).to.be.called;
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UserInformationDataComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UserInformationDataTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UserInformationDataController);
      });
  });
});
