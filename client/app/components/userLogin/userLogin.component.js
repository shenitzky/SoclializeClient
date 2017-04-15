import template from './userLogin.html';
import controller from './userLogin.controller';
import './userLogin.scss';

let userLoginComponent = {
  restrict: 'E',
  bindings: {
    user:'='
  },
  template,
  controller
};

export default userLoginComponent;
