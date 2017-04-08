// import MapHandlerModule from './mapHandler'
// import MapHandlerController from './mapHandler.controller';
// import MapHandlerComponent from './mapHandler.component';
// import MapHandlerTemplate from './mapHandler.html';
//
// describe('MapHandler', () => {
//   let $rootScope, makeController;
//
//   beforeEach(window.module(MapHandlerModule));
//   beforeEach(inject((_$rootScope_) => {
//     $rootScope = _$rootScope_;
//     makeController = () => {
//       return new MapHandlerController();
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
//       expect(MapHandlerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
//     });
//   });
//
//   describe('Component', () => {
//       // component/directive specs
//       let component = MapHandlerComponent;
//
//       it('includes the intended template',() => {
//         expect(component.template).to.equal(MapHandlerTemplate);
//       });
//
//       it('invokes the right controller', () => {
//         expect(component.controller).to.equal(MapHandlerController);
//       });
//   });
// });
