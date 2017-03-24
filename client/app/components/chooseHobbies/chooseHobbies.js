import angular from 'angular';
import uiRouter from 'angular-ui-router';
import chooseHobbiesComponent from './chooseHobbies.component';

let chooseHobbiesModule = angular.module('chooseHobbies', [
  uiRouter
])

    .config(($stateProvider) => {
        "ngInject";

        $stateProvider
            .state('chooseHobbies', {
                url: '/chooseHobbies',
                component: 'chooseHobbies'
            })
    })

.component('chooseHobbies', chooseHobbiesComponent)

.name;

export default chooseHobbiesModule;
