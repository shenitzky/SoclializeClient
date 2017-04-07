/**
 * Created by Yossi on 07/04/2017.
 */
import angular from 'angular';
import matchDataService from './matchData.service'
import matchDataApi from './matchDataApi/matchDataApi'

let matchDataServiceModule = angular.module('matchDataServiceModule', [
  matchDataApi
])
  .service('matchDataService',matchDataService)
  .name;

export default matchDataServiceModule;

