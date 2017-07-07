import DesktopToolBarModule from './desktopToolBar'
import DesktopToolBarController from './desktopToolBar.controller';
import DesktopToolBarComponent from './desktopToolBar.component';
import DesktopToolBarTemplate from './desktopToolBar.html';

describe('DesktopToolBar', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DesktopToolBarModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DesktopToolBarController();
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

  });

  describe('Component', () => {
      // component/directive specs
      let component = DesktopToolBarComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DesktopToolBarTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DesktopToolBarController);
      });
  });
});
