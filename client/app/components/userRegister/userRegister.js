import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userRegisterComponent from './userRegister.component';

let userRegisterModule = angular.module('userRegister', [
  uiRouter
])
  
  
  .config(($stateProvider) => {
    "ngInject";
    
    $stateProvider
      .state('userRegister', {
        url: '/userRegister',
        component: 'userRegister',
      })
  })
  
  .component('userRegister', userRegisterComponent)

.name;

export default userRegisterModule;
