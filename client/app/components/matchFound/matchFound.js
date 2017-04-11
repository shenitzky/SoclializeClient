import angular from 'angular';
import uiRouter from 'angular-ui-router';
import matchFoundComponent from './matchFound.component';

let matchFoundModule = angular.module('matchFound', [
  uiRouter
])
  
  .config(($stateProvider) => {
      "ngInject";
      
      $stateProvider
        .state('matchFound', {
            url: '/matchFound',
            component: 'matchFound',
            params: {'optionalMatch': null , 'time': null , 'date': null, 'matchReqId': null }
        })
  })
  
  
.component('matchFound', matchFoundComponent)

.name;

export default matchFoundModule;
