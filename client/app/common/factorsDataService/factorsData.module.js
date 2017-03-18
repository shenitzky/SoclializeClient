import angular from 'angular';
import factorsDataService from './factorsData.service'
import factorsDataApi from './factorsDataApi/factorsDataApi'

let factorsDataServiceModule = angular.module('factorsDataServiceModule', [
    factorsDataApi
])
    .service('factorsDataService',factorsDataService)
    .name;

export default factorsDataServiceModule;

