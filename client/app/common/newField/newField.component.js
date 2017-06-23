import template from './newField.html';
import './newField.scss'

let newFieldComponent = function () {
  return {
    restrict:'E',
    template,
  };
};

export default newFieldComponent;