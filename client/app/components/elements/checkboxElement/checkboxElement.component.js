import template from './checkboxElement.html';
import controller from './checkboxElement.controller';
import './checkboxElement.scss';

let checkboxElementComponent = {
  restrict: 'E',
  bindings: {
    label: '@',
    ngModel: '=?',
    sectionModel:'@',
    sectionKey:'@',
    onElementChange: '&',
    isDisable:'@'
  },
  template,
  controller
};

export default checkboxElementComponent;
