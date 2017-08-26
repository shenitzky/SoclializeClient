import MapHandlerModule from './mapHandler'
import MapHandlerController from './mapHandler.controller';
import MapHandlerComponent from './mapHandler.component';
import MapHandlerTemplate from './mapHandler.html';

import sinon from 'sinon';
import sinonAsPromised from 'sinon-as-promised';
import _ from 'lodash';

describe('MapHandler', () => {
  let $rootScope, makeController,$q, $timeout,$state,$window,$stateParams,NgMap,userDataService,matchDataService;
  
  
  beforeEach(window.module(MapHandlerModule));
  beforeEach(inject((_$q_, _$timeout_, _$rootScope_) => {
    $rootScope = _$rootScope_;
    $q = _$q_;
    sinonAsPromised($q);
    $timeout = _$timeout_;
  
    matchDataService = {
      getReverseGeocoding: sinon.stub().resolves(),
    };
  
    $stateParams = {matchData:{locations:[{lat:1,lng:2},{lat:3,lng:4}]}};
    
    $state = {
      go: sinon.stub().resolves()
    };
    
    makeController = () => {
      return new  MapHandlerController($state,$window,$stateParams,NgMap,userDataService,matchDataService,$q);
    };
    
  }));
  
  describe('Controller', () => {
    
    it('Valid googleMapsUrl',()=>{
      let controller = new makeController();
      controller.$onInit();
      expect(controller.googleMapsUrl).to.be.equal("https://maps.googleapis.com/maps/api/js?key=AIzaSyD8IhUUKMzZsCjNFUa_zM6sFhzB6jZhaJk");
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MapHandlerComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MapHandlerTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MapHandlerController);
      });
  });
});
