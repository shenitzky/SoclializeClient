import angular from 'angular';
import uiRouter from 'angular-ui-router';
import checkboxElementComponent from './checkboxElement.component';

let checkboxElementModule = angular.module('checkboxElement', [
  uiRouter
])

.component('checkboxElement', checkboxElementComponent)

.name;

export default checkboxElementModule;
