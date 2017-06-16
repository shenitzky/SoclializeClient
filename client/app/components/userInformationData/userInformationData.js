import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userInformationDataComponent from './userInformationData.component';

let userInformationDataModule = angular.module('userInformationData', [
  uiRouter
])
  .config(($stateProvider) => {
    "ngInject";
    
    $stateProvider
      .state('userInformationData', {
        url: '/userInformationData',
        component: 'userInformationData'
      })
  })
  
.component('userInformationData', userInformationDataComponent)

.name;

export default userInformationDataModule;
