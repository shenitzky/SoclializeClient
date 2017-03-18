import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import angularMaterial from 'angular-material';
import AngularAnimate from 'angular-animate';
//import AngularBootstrap from 'angular-ui-bootstrap';
import angularAria from 'angular-aria';
//import lodash from 'lodash'
import 'angular-material/angular-material.css'
angular.module('app', [
    uiRouter,
    Common,
    Components,
    angularMaterial,
    angularAria,
    AngularAnimate
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
