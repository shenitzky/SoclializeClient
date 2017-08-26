import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import angularMaterial from 'angular-material';
import AngularAnimate from 'angular-animate';
import ngMap from 'ngmap';
import userLoginModule from './components/userLogin/userLogin'
import userRegisterModule from './components/userRegister/userRegister'
import AngularBootstrap from 'angular-ui-bootstrap';
import angularAria from 'angular-aria';
import lodash from 'lodash'
import moment from 'moment/moment';
import pageNotFound from './../../client/app/common/pageNotFound/pageNotFound'

import 'angular-material/angular-material.css'
angular.module('app', [
    uiRouter,
    Common,
    Components,
    angularMaterial,
    angularAria,
    AngularAnimate,
    ngMap,
    userLoginModule,
    userRegisterModule,
    pageNotFound
  ])
  .config(($locationProvider,$urlRouterProvider,$stateProvider) => {
    "ngInject";
    
    $urlRouterProvider.otherwise('/404');
  
    $stateProvider
    .state('app', {
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
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent)
    .value('moment',moment);
