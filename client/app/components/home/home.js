import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import userDataService from './../../common/userDataService/userData.module'
import userProfileModule from './../userProfile/userProfile'

let homeModule = angular.module('home', [
  uiRouter,
  userDataService,
  userProfileModule
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    })
})

.component('home', homeComponent)
.name;

export default homeModule;
