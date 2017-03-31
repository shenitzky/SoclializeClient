import angular from 'angular';
import uiRouter from 'angular-ui-router';
import matchRequestComponent from './matchRequest.component';
import factorsDataService from './../../common/factorsDataService/factorsData.module'

let matchRequestModule = angular.module('matchRequest', [
    uiRouter,
    factorsDataService
])
    .config(($stateProvider) => {
        "ngInject";

        $stateProvider
            .state('matchRequest', {
                url: '/matchRequest',
                component: 'matchRequest'
            })
    })

.component('matchRequest', matchRequestComponent)

.name;

export default matchRequestModule;
