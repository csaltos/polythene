import { statefulComponent } from 'polythene-react-base';
import { button } from 'polythene-core-button';
import { ripple } from 'polythene-react-ripple';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps = function createProps(vnode, args) {
  return button.createProps(vnode, _extends(args, { ripple: ripple }));
};
var createContent = function createContent(vnode, args) {
  return button.createContent(vnode, _extends(args, { ripple: ripple }));
};

var button$1 = statefulComponent({
  createProps: createProps,
  createContent: createContent,
  element: button.element
});

button$1.theme = button.theme;
button$1.displayName = "button";

export { button$1 as button };
