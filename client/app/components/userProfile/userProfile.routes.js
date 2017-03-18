// import angular from 'angular';
// import uiRouter from 'angular-ui-router';
//
// let userProfileRoutesModule = angular.module('userProfile.routes', [
//     uiRouter
// ])
//     .config(['$stateProvider', ($stateProvider) => {
//         $stateProvider
//             .state('userProfile', {
//                 url: '/userProfile',
//                 template: '<user-profile></user-profile>',
//                 resolve:{module:loadModule}
//             })
//     }]);
//
// let loadModule = ['$q', '$ocLazyLoad', ($q, $ocLazyLoad)=> {
//     let deferred = $q.defer();
//     require.ensure([], function (require) {
//         let mod = require(`./userProfile`);
//         $ocLazyLoad.inject(mod.default.name).then(()=>{
//             deferred.resolve(mod);
//         });
//     });
//     return deferred.promise;
// }];
//
// export default userProfileRoutesModule;
//
