import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import userDataService from './../../common/userDataService/userData.module';
import matchDataService from './../../common/matchDataService/matchData.module';
import userProfileModule from './../userProfile/userProfile';
import chooseHobbiesModule from './../chooseHobbies/chooseHobbies';
import matchFoundModule from './../matchFound/matchFound'
import matchRequestModule from './../matchRequest/matchRequest';
import notificationsModule from './../notifications/notifications';
import checkboxElement from './../elements/checkboxElement/checkboxElement'

let homeModule = angular.module('home', [
  uiRouter,
  userDataService,
  matchDataService,
  userProfileModule,
  chooseHobbiesModule,
  matchRequestModule,
  matchFoundModule,
  checkboxElement,
  notificationsModule
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
