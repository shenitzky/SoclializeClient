import angular from 'angular';
import factorDataApiService from './factorsDataApi.service'


let factorDataApiModule = angular.module('factorDataApiModule', [])
    .service('factorDataApi', factorDataApiService)
    .name;

export default factorDataApiModule;
