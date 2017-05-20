import angular from 'angular';
import uiRouter from 'angular-ui-router';
import checkOptionalMatchStatusComponent from './checkOptionalMatchStatus.component';

let checkOptionalMatchStatusModule = angular.module('checkOptionalMatchStatus', [
  uiRouter
])
  
  .config(($stateProvider) => {
    "ngInject";
    
    //State provider params
    $stateProvider
      .state('checkOptionalMatchStatus', {
        url: '/checkOptionalMatchStatus',
        component: 'checkOptionalMatchStatus',
        params: {'optionalMatchId': null , 'matchReqId': null }
      })
  })
  
  
  
.component('checkOptionalMatchStatus', checkOptionalMatchStatusComponent)

.name;

export default checkOptionalMatchStatusModule;
