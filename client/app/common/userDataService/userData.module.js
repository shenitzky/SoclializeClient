import angular from 'angular';
import userDataService from './userData.service'
import userDataApi from './userDataApi/userDataApi'

let userDataServiceModule = angular.module('userDataServiceModule', [
    userDataApi
])
    .service('userDataService',userDataService)
    .name;

export default userDataServiceModule;

