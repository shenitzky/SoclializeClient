import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mapHandlerComponent from './mapHandler.component';

let mapHandlerModule = angular.module('mapHandler', [
  uiRouter
])
  
  .config(($stateProvider) => {
    "ngInject";
    
    $stateProvider
      .state('mapHandler', {
        url: '/mapHandler',
        component: 'mapHandler',
        params: {'MatchRequestId': null , 'location': null}
      })
  })
  
  .component('mapHandler', mapHandlerComponent)
  .name;

export default mapHandlerModule;
