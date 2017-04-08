import angular from 'angular';
import uiRouter from 'angular-ui-router';
import matchRequestUpdateComponent from './matchRequestUpdate.component';

let matchRequestUpdateModule = angular.module('matchRequestUpdate', [
  uiRouter
])
  
  
  .config(($stateProvider) => {
    "ngInject";
    
    $stateProvider
      .state('matchRequestUpdate', {
        url: '/matchRequestUpdate',
        component: 'matchRequestUpdate',
        params: {'MatchRequestId': null , 'location': null}
      })
  })
  
  
.component('matchRequestUpdate', matchRequestUpdateComponent)
.name;

export default matchRequestUpdateModule;
