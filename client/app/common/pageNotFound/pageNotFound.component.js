/**
 * Created by Yossi on 30/06/2017.
 */
import template from './pageNotFound.html';
import './pageNotFound.scss';

let pageNotFoundComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template
  };
};

export default pageNotFoundComponent;
