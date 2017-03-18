import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userProfileComponent from './userProfile.component';
import factorsDataService from './../../common/factorsDataService/factorsData.module'

let userProfileModule = angular.module('userProfile', [
  uiRouter,
  factorsDataService
])
    .config(($stateProvider) => {
        "ngInject";

        $stateProvider
            .state('userProfile', {
                url: '/userProfile',
                component: 'userProfile'
            })
    })
.component('userProfile', userProfileComponent)

.name;

export default userProfileModule;
