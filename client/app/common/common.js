import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import connection from './connection/connection'
import LowToolBar from './lowToolBar/lowToolBar'


let commonModule = angular.module('app.common', [
    Navbar,
    Hero,
    User,
    connection,
    LowToolBar
])

    .name;

export default commonModule;
