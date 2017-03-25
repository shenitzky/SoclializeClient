import angular from 'angular';
import uiRouter from 'angular-ui-router';
import lowToolBarComponent from './lowToolBar.component';

let lowToolBarModule = angular.module('lowToolBar', [
  uiRouter
])

.component('lowToolBar', lowToolBarComponent)

.name;

export default lowToolBarModule;
