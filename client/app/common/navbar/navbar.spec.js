import NavbarModule from './navbar'
import NavbarController from './navbar.controller';
import NavbarComponent from './navbar.component';
import NavbarTemplate from './navbar.html';
import sinon from 'sinon';
import sinonAsPromised from 'sinon-as-promised';
import _ from 'lodash';

describe('CheckOptionalMatchStatus', () => {
  let $rootScope, makeController,$q, $timeout,$state;
  
  beforeEach(window.module(NavbarModule));
  beforeEach(inject((_$q_, _$timeout_, _$rootScope_) => {
    $rootScope = _$rootScope_;
    $q = _$q_;
    sinonAsPromised($q);
    $timeout = _$timeout_;
  
    $state = {
      go: sinon.stub().resolves(true)
    }
    
    makeController = () => {
      return new NavbarController($state);
    };
  }));
  
  describe('Controller', () => {
    it('changeStateHomeOnClick',()=>{
      let controller = new makeController();
      let goHome = 'matchRequest';
      controller.changeStateHomeOnClick(goHome);
      expect($state.go.calledWith('matchRequest')).to.be.equal(true);
    });
  });
  
  describe('Component', () => {
    
    let component = NavbarComponent;
    
    it('includes the intended template',() => {
      expect(component.template).to.equal(NavbarTemplate);
    });
    
    it('invokes the right controller', () => {
      expect(component.controller).to.equal(NavbarController);
    });
  });
});

