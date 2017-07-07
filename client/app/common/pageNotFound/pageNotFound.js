/**
 * Created by Yossi on 30/06/2017.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import pageNotFoundComponent from './pageNotFound.component';

let pageNotFoundModule = angular.module('pageNotFound', [
  uiRouter
])
  
  .directive('pageNotFound', pageNotFoundComponent)
  .name;

export default pageNotFoundModule;

