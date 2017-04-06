import MatchFoundModule from './matchFound'
import MatchFoundController from './matchFound.controller';
import MatchFoundComponent from './matchFound.component';
import MatchFoundTemplate from './matchFound.html';

describe('MatchFound', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MatchFoundModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MatchFoundController();
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
      expect(MatchFoundTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MatchFoundComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MatchFoundTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MatchFoundController);
      });
  });
});
