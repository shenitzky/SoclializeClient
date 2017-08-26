import angular from 'angular';
import Navbar from './navbar/navbar';
import connection from './connection/connection'
import LowToolBar from './lowToolBar/lowToolBar'
import desktopToolBar from './desktopToolBar/desktopToolBar'


let commonModule = angular.module('app.common', [
    Navbar,
    connection,
    LowToolBar,
    desktopToolBar
])

    .name;

export default commonModule;
