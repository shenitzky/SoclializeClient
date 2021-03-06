import LowToolBarModule from './lowToolBar'
import LowToolBarController from './lowToolBar.controller';
import LowToolBarComponent from './lowToolBar.component';
import LowToolBarTemplate from './lowToolBar.html';

describe('LowToolBar', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LowToolBarModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LowToolBarController();
    };
  }));
  
  describe('Controller', () => {
    it('has a name property', () => {
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });
  
  describe('Component', () => {
      
      let component = LowToolBarComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(LowToolBarTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(LowToolBarController);
      });
  });
});
