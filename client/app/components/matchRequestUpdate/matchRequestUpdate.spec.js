// import MatchRequestUpdateModule from './matchRequestUpdate'
// import MatchRequestUpdateController from './matchRequestUpdate.controller';
// import MatchRequestUpdateComponent from './matchRequestUpdate.component';
// import MatchRequestUpdateTemplate from './matchRequestUpdate.html';
// import sinon from 'sinon';
// import sinonAsPromised from 'sinon-as-promised';
//
// describe.only('MatchRequestUpdate', () => {
//   let $rootScope, makeController,$q,$timeout,$state,$window,$stateParams,matchDataServiceMock,controller,stateParams;
//
//   const matchRequestObjectMock = {
//     matchReqId: 2,
//     location: {
//       lng: 30,
//       lat: 30
//     }
//   };
//
//   let optionalMatchData = {
//     data: {
//       matchRequestId: -1
//     }
//   };
//
//   beforeEach(window.module(MatchRequestUpdateModule));
//   beforeEach(inject((_$rootScope_,_$timeout_,_$q_) => {
//     $q = _$q_;
//     $rootScope = _$rootScope_;
//     $timeout = _$timeout_;
//     sinonAsPromised($q);
//
//     matchDataServiceMock = {
//       updateAndCheckMatchRequest: sinon.stub().resolves(optionalMatchData)
//     };
//
//     stateParams = {
//       MatchRequestId: -1,
//     };
//
//     makeController = () => {
//       return new MatchRequestUpdateController($state,$window,{$stateParams:stateParams},matchDataServiceMock);
//     };
//     $stateParams = stateParams;
//     controller = makeController();
//     controller.matchRequestObject = {
//       'matchReqId': matchRequestObjectMock.matchReqId,
//       'location': matchRequestObjectMock.location
//     }
//   }));
//
//   describe('Controller', () => {
//     // controller specs
//     it('', () => { // erase if removing this.name from the controller
//       controller.$onInit();
//       $timeout.flush();
//       expect(controller.optionalMatchNotFound).to.be.equal(true);
//
//       //expect(matchDataServiceMock.updateAndCheckMatchRequest).to.equal(optionalMatchData);
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
