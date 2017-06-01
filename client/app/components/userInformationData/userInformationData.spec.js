// import UserInformationDataModule from './userInformationData'
// import UserInformationDataController from './userInformationData.controller';
// import UserInformationDataComponent from './userInformationData.component';
// import UserInformationDataTemplate from './userInformationData.html';
//
// describe('UserInformationData', () => {
//   let $rootScope, makeController;
//
//   beforeEach(window.module(UserInformationDataModule));
//   beforeEach(inject((_$rootScope_) => {
//     $rootScope = _$rootScope_;
//     makeController = () => {
//       return new UserInformationDataController();
//     };
//   }));
//
//   describe('Module', () => {
//     // top-level specs: i.e., routes, injection, naming
//   });
//
//   describe('Controller', () => {
//     // controller specs
//     it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
//       let controller = makeController();
//       expect(controller).to.have.property('name');
//     });
//   });
//
//   describe('Template', () => {
//     // template specs
//     // tip: use regex to ensure correct bindings are used e.g., {{  }}
//     it('has name in template [REMOVE]', () => {
//       expect(UserInformationDataTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
//     });
//   });
//
//   describe('Component', () => {
//       // component/directive specs
//       let component = UserInformationDataComponent;
//
//       it('includes the intended template',() => {
//         expect(component.template).to.equal(UserInformationDataTemplate);
//       });
//
//       it('invokes the right controller', () => {
//         expect(component.controller).to.equal(UserInformationDataController);
//       });
//   });
// });
