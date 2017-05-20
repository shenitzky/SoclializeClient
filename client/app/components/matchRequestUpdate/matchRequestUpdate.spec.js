// import MatchRequestUpdateModule from './matchRequestUpdate'
// import MatchRequestUpdateController from './matchRequestUpdate.controller';
// import MatchRequestUpdateComponent from './matchRequestUpdate.component';
// import MatchRequestUpdateTemplate from './matchRequestUpdate.html';
// import sinon from 'sinon';
// import sinonAsPromised from 'sinon-as-promised';
//
// describe('MatchRequestUpdate', () => {
//   let $rootScope, makeController,$q,$timeout,$state,$window,$stateParams,matchDataServiceMock;
//
//   const matchRequestObject = {
//     matchReqId: 2,
//     location: {
//       lng: 30,
//       lat: 30
//     }
//   };
//
//   const optionalMatchData = 'HaveAMatch';
//
//   beforeEach(window.module(MatchRequestUpdateModule));
//   beforeEach(inject((_$rootScope_,_$timeout_,_$q_) => {
//     $q = _$q_;
//     $rootScope = _$rootScope_;
//     $timeout = _$timeout_;
//     sinonAsPromised($q);
//
//
//     $stateParams = {
//       MatchRequestId: 4,
//       location: {
//         lng: 30,
//         lat: 30
//       }
//     };
//
//     matchDataServiceMock = {
//       updateAndCheckMatchRequest: sinon.stub().resolves(optionalMatchData)
//     };
//
//     makeController = () => {
//       return new MatchRequestUpdateController($state,$window,$stateParams,matchDataServiceMock);
//     };
//   }));
//
//   describe('Controller', () => {
//     // controller specs
//     it('', () => { // erase if removing this.name from the controller
//       let controller = makeController();
//       controller.$onInit();
//       controller.matchRequestObject = matchRequestObject;
//       //expect(matchDataService.updateAndCheckMatchRequest).to.be.calledWith(controller.matchRequestObject);
//       expect(matchDataServiceMock.updateAndCheckMatchRequest).to.equal(optionalMatchData);
//     });
//   });
//
//   describe('Component', () => {
//       // component/directive specs
//       let component = MatchRequestUpdateComponent;
//
//       it('includes the intended template',() => {
//         expect(component.template).to.equal(MatchRequestUpdateTemplate);
//       });
//
//       it('invokes the right controller', () => {
//         expect(component.controller).to.equal(MatchRequestUpdateController);
//       });
//   });
// });
