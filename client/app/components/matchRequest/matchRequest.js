import angular from 'angular';
import uiRouter from 'angular-ui-router';
import matchRequestComponent from './matchRequest.component';

let matchRequestModule = angular.module('matchRequest', [
    uiRouter
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
