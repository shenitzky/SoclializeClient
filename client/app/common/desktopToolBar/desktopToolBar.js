import angular from 'angular';
import uiRouter from 'angular-ui-router';
import desktopToolBarComponent from './desktopToolBar.component';

let desktopToolBarModule = angular.module('desktopToolBar', [
  uiRouter
])

.component('desktopToolBar', desktopToolBarComponent)

.name;

export default desktopToolBarModule;
