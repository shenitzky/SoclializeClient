import template from './userRegister.html';
import controller from './userRegister.controller';
import './userRegister.scss';

let userRegisterComponent = {
  restrict: 'E',
  bindings: {
    userDataLogs:'<'
  },
  template,
  controller
};

export default userRegisterComponent;
