import HomeModule from './home'
import HomeController from './home.controller';
import HomeComponent from './home.component';
import HomeTemplate from './home.html';
import sinon from 'sinon';
import sinonAsPromised from 'sinon-as-promised';
import _ from 'lodash';

describe('Home', () => {
  let $rootScope, makeController,$q, $timeout,$state;
  
  
  beforeEach(window.module(HomeModule));
  beforeEach(inject((_$q_, _$timeout_, _$rootScope_) => {
    $rootScope = _$rootScope_;
    $q = _$q_;
    sinonAsPromised($q);
    $timeout = _$timeout_;
    
    $state = {
      go: sinon.stub().resolves()
    };
    
    makeController = () => {
      return new  HomeController($state);
    };
    
  }));
  
  describe('Controller', () => {
    
    it('Should move state on init',()=>{
      let controller = new makeController();
      controller.$onInit();
      expect($state.go.calledWith('matchRequest')).to.be.true;
    });
  });
  
  describe('Component', () => {
    
    let component = HomeComponent;
    
    it('includes the intended template',() => {
      expect(component.template).to.equal(HomeTemplate);
    });
    
    it('invokes the right controller', () => {
      expect(component.controller).to.equal(HomeController);
    });
  });
});

