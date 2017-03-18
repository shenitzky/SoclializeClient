// import {ConnectionService} from './connection.factory'
//
// import sinon from 'sinon'
// import sinonAsPromised from 'sinon-as-promised'
//
//
// describe('Connection service', () => {
//
//     // set your global test vars here.
//     let $q, $timeout, service, $http, popupService, mockTimeout,cancelStub, $httpBackend;
//
//     // set up the angular mocks
//     beforeEach(() => {
//         inject((_$http_, _$q_, _$timeout_, _$httpBackend_) => {
//             $http = _$http_;
//             $q = _$q_;
//             $timeout = _$timeout_;
//             $httpBackend = _$httpBackend_;
//             sinonAsPromised($q);
//             cancelStub = sinon.stub();
//             mockTimeout = sinon.stub().returns(cancelStub);
//             popupService = {
//                 showLoading: sinon.stub(),
//                 showNegativeMessage: sinon.stub()
//             };
//         });
//
//         service = new ConnectionService($http, $q, popupService, $timeout);
//     });
//
//     let testHttpErrorNotification = (httpCode, shouldShowMessage) => {
//         $httpBackend.when('PUT', 'url', '{"someData":""}').respond(httpCode, '');
//
//         service.sendHttp({ method:'PUT', data: { someData: ''}, url: 'url' });
//         $httpBackend.flush();
//
//         expect(popupService.showNegativeMessage.withArgs('', 'ERROR', 3).calledOnce).to.be[shouldShowMessage];
//     };
//
//     describe('sendHttp', () => {
//         it('sendHttp should set timeout function', ()=> {
//             $httpBackend.when('GET', 'url').respond(200, { foo: 'bar' });
//
//             service.sendHttp({method:'GET',url:'url'});
//             $timeout.flush();
//             expect(popupService.showLoading.calledOnce).to.be.true;
//         });
//
//         it('sendHttp cancel  timeout function', ()=> {
//             service.sendHttp({method:'GET',url:'url'});
//             expect(popupService.showLoading.calledOnce).to.be.false;
//         });
//
//         it('Should show general error notification in case of HTTP 500 error', ()=> {
//             testHttpErrorNotification(500, true);
//         });
//
//         it('Should not show general error notification in case of HTTP 400/401 error', ()=> {
//             testHttpErrorNotification(400, false);
//             testHttpErrorNotification(401, false);
//         });
//     });
//
//     describe('sendPlainText', () => {
//         it('Sends HTTP request with plain text and return promise for the response status and data', () => {
//
//             $httpBackend.expectPOST('/api', 'This is a plain text data')
//                 .respond(200, 'Cool');
//
//             let promise = service.sendPlainText({
//                 method: 'POST',
//                 url: '/api',
//                 data: 'This is a plain text data',
//                 withCredentials: false
//             });
//
//             let promiseResolved = false;
//             promise.then((response) => {
//                 promiseResolved = true;
//                 expect(response.status).to.be.equal(200);
//                 expect(response.data).to.be.equal('Cool');
//             });
//             $httpBackend.flush();
//             assert(promiseResolved);
//         });
//
//         it('Return rejected promise with the error', () => {
//             $httpBackend.expectPOST('/api', 'This is a plain text data')
//                 .respond(400, 'Bad request!');
//
//             let promise = service.sendPlainText({
//                 method: 'POST',
//                 url: '/api',
//                 data: 'This is a plain text data',
//                 withCredentials: false
//             });
//
//             let promiseResolved = false;
//             promise.then(({ headers, data, status }) => {
//             }, (response) => {
//                 promiseResolved = true;
//                 expect(response.status).to.be.equal(400);
//                 expect(response.data).to.be.equal('Bad request!');
//             });
//             $httpBackend.flush();
//             assert(promiseResolved);
//         });
//     });
//
// });