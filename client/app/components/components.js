import angular from 'angular';
import Home from './home/home';
import uiRouter from 'angular-ui-router';
import userDataService from './../common/userDataService/userData.module';
import matchDataService from './../common/matchDataService/matchData.module';
import userProfileModule from './userProfile/userProfile';
import chooseHobbiesModule from './chooseHobbies/chooseHobbies';
import matchFoundModule from './matchFound/matchFound'
import matchRequestModule from './matchRequest/matchRequest';
import notificationsModule from './notifications/notifications';
import checkOptionalMatchStatusModule from './checkOptionalMatchStatus/checkOptionalMatchStatus';
import mapHandlerModule from './mapHandler/mapHandler';
import matchRequestUpdateModule from './matchRequestUpdate/matchRequestUpdate';
import checkboxElement from './elements/checkboxElement/checkboxElement'
import userInformationDataModule from './userInformationData/userInformationData'

let componentModule = angular.module('app.components', [
  Home,
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
])

.name;

export default componentModule;
