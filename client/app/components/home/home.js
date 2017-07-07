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
import checkOptionalMatchStatusModule from './../checkOptionalMatchStatus/checkOptionalMatchStatus';
import mapHandlerModule from './../mapHandler/mapHandler';
import matchRequestUpdateModule from './../matchRequestUpdate/matchRequestUpdate';
import checkboxElement from './../elements/checkboxElement/checkboxElement'
import userInformationDataModule from './../userInformationData/userInformationData'
import pageNotFound from './../../common/pageNotFound/pageNotFound'


let homeModule = angular.module('home', [
  uiRouter,
  userDataService,
  matchDataService,
  userProfileModule,
  chooseHobbiesModule,
  matchRequestModule,
  matchFoundModule,
  checkboxElement,
  mapHandlerModule,
  matchRequestUpdateModule,
  checkOptionalMatchStatusModule,
  notificationsModule,
  userInformationDataModule,
  pageNotFound
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/404');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    })
    .state('404', {
      url: '/404',
      template: '<page-not-found></page-not-found>',
      data: {
        error: 404,
        background: 'notFound',
      }
    })
})

.component('home', homeComponent)
.name;

export default homeModule;
