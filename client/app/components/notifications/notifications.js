import angular from 'angular';
import uiRouter from 'angular-ui-router';
import notificationsComponent from './notifications.component';

let notificationsModule = angular.module('notifications', [
  uiRouter
])
  
  .config(($stateProvider) => {
    "ngInject";
    
    $stateProvider
      .state('notifications', {
        url: '/notifications',
        component: 'notifications',
        params: {'optionalMatch': null }
      })
  })
  
  
.component('notifications', notificationsComponent)
.name;

export default notificationsModule;
