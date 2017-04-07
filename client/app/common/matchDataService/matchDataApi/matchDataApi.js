/**
 * Created by Yossi on 07/04/2017.
 */
import angular from 'angular';
import matchDataApiService from './matchDataApi.service'


let matchDataApiModule = angular.module('matchDataApiModule', [])
  .service('matchDataApi', matchDataApiService)
  .name;

export default matchDataApiModule;
