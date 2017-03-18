import angular from 'angular';
import userDataApiService from './userDataApi.service'


let userDataApiModule = angular.module('userDataApiModule', [])
    .service('userDataApi', userDataApiService)
    .name;

export default userDataApiModule;
