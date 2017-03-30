import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import userDataService from './../../common/userDataService/userData.module';
import userProfileModule from './../userProfile/userProfile';
import chooseHobbiesModule from './../chooseHobbies/chooseHobbies';
import matchRequestModule from './../matchRequest/matchRequest';

let homeModule = angular.module('home', [
  uiRouter,
  userDataService,
  userProfileModule,
  chooseHobbiesModule,
  matchRequestModule
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
