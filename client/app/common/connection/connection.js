import angular from 'angular';
import ConnectionFactory from './connection.factory';

let connectionModule = angular.module('connection', [])

    .factory('connection', ConnectionFactory)
    .name;

export default connectionModule;

