// import CheckboxElementModule from './checkboxElement'
// import CheckboxElementController from './checkboxElement.controller';
// import CheckboxElementComponent from './checkboxElement.component';
// import CheckboxElementTemplate from './checkboxElement.html';
//
// describe('CheckboxElement', () => {
//   let $rootScope, makeController;
//
//   beforeEach(window.module(CheckboxElementModule));
//   beforeEach(inject((_$rootScope_) => {
//     $rootScope = _$rootScope_;
//     makeController = () => {
//       return new CheckboxElementController();
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
//       expect(CheckboxElementTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
//     });
//   });
//
//   describe('Component', () => {
//       // component/directive specs
//       let component = CheckboxElementComponent;
//
//       it('includes the intended template',() => {
//         expect(component.template).to.equal(CheckboxElementTemplate);
//       });
//
//       it('invokes the right controller', () => {
//         expect(component.controller).to.equal(CheckboxElementController);
//       });
//   });
// });
