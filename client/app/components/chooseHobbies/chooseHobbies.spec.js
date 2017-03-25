// import ChooseHobbiesModule from './chooseHobbies'
// import ChooseHobbiesController from './chooseHobbies.controller';
// import ChooseHobbiesComponent from './chooseHobbies.component';
// import ChooseHobbiesTemplate from './chooseHobbies.html';
//
// describe('ChooseHobbies', () => {
//   let $rootScope, makeController;
//
//   beforeEach(window.module(ChooseHobbiesModule));
//   beforeEach(inject((_$rootScope_) => {
//     $rootScope = _$rootScope_;
//     makeController = () => {
//       return new ChooseHobbiesController();
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
//       expect(ChooseHobbiesTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
//     });
//   });
//
//   describe('Component', () => {
//       // component/directive specs
//       let component = ChooseHobbiesComponent;
//
//       it('includes the intended template',() => {
//         expect(component.template).to.equal(ChooseHobbiesTemplate);
//       });
//
//       it('invokes the right controller', () => {
//         expect(component.controller).to.equal(ChooseHobbiesController);
//       });
//   });
// });
