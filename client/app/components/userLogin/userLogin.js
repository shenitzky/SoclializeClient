import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userLoginComponent from './userLogin.component';

let userLoginModule = angular.module('userLogin', [
  uiRouter
])
  
  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state('userLogin', {
        url: '/userLogin',
        component: 'userLogin',
      })
  })
  
  
.component('userLogin', userLoginComponent)

.name;

export default userLoginModule;
