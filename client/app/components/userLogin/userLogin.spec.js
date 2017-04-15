import UserLoginModule from './userLogin'
import UserLoginController from './userLogin.controller';
import UserLoginComponent from './userLogin.component';
import UserLoginTemplate from './userLogin.html';

describe('UserLogin', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UserLoginModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UserLoginController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(UserLoginTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UserLoginComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UserLoginTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UserLoginController);
      });
  });
});
