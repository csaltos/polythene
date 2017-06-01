import { animationEndEvent, filterSupportedAttributes, isTouch, touchEndEvent } from 'polythene-core';
import { mixin, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-ripple",

  // elements
  mask: "pe-ripple__mask",
  waves: "pe-ripple__waves",

  // states
  constrained: "pe-ripple--constrained",
  wavesAnimating: "pe-ripple__waves--animating"
};

var vars$1 = {
  color: "inherit" // only specify this variable to get both states
  // color_light:   "inherit",
  // color_dark:    "inherit"
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector) {
  return [_defineProperty({}, selector, [mixin.fit(), {
    color: "inherit",
    borderRadius: "inherit",
    pointerEvents: "none",

    ".pe-ripple--constrained": {
      borderRadius: "inherit",

      " .pe-ripple__mask": {
        overflow: "hidden",
        borderRadius: "inherit"
      }
    },
    " .pe-ripple__mask": [mixin.fit(), {
      transform: "translate3d(0,0,0)"
    }],

    " .pe-ripple__waves": {
      outline: "1px solid transparent", // for IE10
      position: "absolute",
      borderRadius: "50%",
      pointerEvents: "none",
      display: "none"
    },
    " .pe-ripple__waves--animating": {
      display: "block"
    }
  }])];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint] || componentVars["color"] || "inherit"
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes.component;

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

styler.generateStyles([selector], vars$1, fns);

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ANIMATION_END_EVENT = animationEndEvent;
var DEFAULT_START_OPACITY = 0.2;
var DEFAULT_END_OPACITY = 0.0;
var DEFAULT_START_SCALE = 0.1;
var DEFAULT_END_SCALE = 2.0;
var OPACITY_DECAY_VELOCITY = 0.35;

var animation = (function (_ref) {
  var e = _ref.e,
      el = _ref.el,
      attrs = _ref.attrs,
      classes = _ref.classes,
      onEndCallback = _ref.onEndCallback;

  var container = document.createElement("div");
  container.setAttribute("class", classes.mask);
  el.appendChild(container);
  var waves = document.createElement("div");
  waves.setAttribute("class", classes.waves);
  container.appendChild(waves);
  var rect = el.getBoundingClientRect();
  var x = isTouch && e.touches ? e.touches[0].pageX : e.clientX;
  var y = isTouch && e.touches ? e.touches[0].pageY : e.clientY;
  var w = el.offsetWidth;
  var h = el.offsetHeight;
  var waveRadius = Math.sqrt(w * w + h * h);
  var mx = attrs.center ? rect.left + rect.width / 2 : x;
  var my = attrs.center ? rect.top + rect.height / 2 : y;
  var rx = mx - rect.left - waveRadius / 2;
  var ry = my - rect.top - waveRadius / 2;
  var startOpacity = attrs.startOpacity !== undefined ? attrs.startOpacity : DEFAULT_START_OPACITY;
  var opacityDecayVelocity = attrs.opacityDecayVelocity !== undefined ? attrs.opacityDecayVelocity : OPACITY_DECAY_VELOCITY;
  var endOpacity = attrs.endOpacity || DEFAULT_END_OPACITY;
  var startScale = attrs.startScale || DEFAULT_START_SCALE;
  var endScale = attrs.endScale || DEFAULT_END_SCALE;
  var duration = attrs.duration ? attrs.duration : 1 / opacityDecayVelocity * 0.2;
  var color = window.getComputedStyle(el).color;
  var animationId = "ripple_animation_" + new Date().getTime();
  var style = waves.style;
  style.width = style.height = waveRadius + "px";
  style.top = ry + "px";
  style.left = rx + "px";
  style["animation-duration"] = style["-webkit-animation-duration"] = style["-moz-animation-duration"] = style["-o-animation-duration"] = duration + "s";
  style.backgroundColor = color;
  style.opacity = startOpacity;
  style.animationName = animationId;
  style.animationTimingFunction = attrs.animationTimingFunction || vars.animation_curve_default;

  var keyframeStyle = [_defineProperty$2({}, "@keyframes " + animationId, {
    " 0%": {
      transform: "scale(" + startScale + ")",
      "opacity": startOpacity
    },
    " 100%": {
      transform: "scale(" + endScale + ")",
      "opacity": endOpacity
    }
  })];
  styler.add(animationId, keyframeStyle);

  var cleanup = function cleanup() {
    waves.classList.remove(classes.wavesAnimating);
    container.removeChild(waves);
    el.removeChild(container);
  };

  var onEnd = function onEnd(evt) {
    styler.remove(animationId);
    waves.removeEventListener(ANIMATION_END_EVENT, onEnd, false);
    if (attrs.end) {
      attrs.end(evt);
    }
    if (attrs.persistent) {
      style.opacity = endOpacity;
      style.transform = "scale(" + endScale + ")";
    } else {
      onEndCallback();
      cleanup();
    }
  };

  waves.addEventListener(ANIMATION_END_EVENT, onEnd, false);
  if (attrs.start) {
    attrs.start(e);
  }
  waves.classList.add(classes.wavesAnimating);
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var element = "div";

var theme = customTheme;

var getInitialState = function getInitialState(vnode, createStream) {
  var animating = createStream(false);
  var removeEventListeners = createStream(false);
  return {
    animating: animating,
    removeEventListeners: removeEventListeners
  };
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, filterSupportedAttributes(attrs), {
    className: [classes.component, attrs.constrained !== false ? classes.constrained : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var state = vnode.state;
  var attrs = vnode.attrs;
  var rippleEl = vnode.dom;

  var tap = function tap(e) {
    if (attrs.disabled) {
      return;
    }
    if (state.animating() && !attrs.multi) {
      return;
    }
    animation({ e: e, el: rippleEl, attrs: attrs, classes: classes, onEndCallback: function onEndCallback() {
        return state.animating(false);
      } });
    state.animating(true);
  };
  var triggerEl = attrs.target ? attrs.target() : vnode.dom && vnode.dom.parentElement;
  triggerEl.addEventListener(touchEndEvent, tap, false);
  state.removeEventListeners(function () {
    return triggerEl.removeEventListener(touchEndEvent, tap, false);
  });
};

var onUnmount = function onUnmount(_ref2) {
  var state = _ref2.state;
  return state.removeEventListeners()();
};

var ripple = Object.freeze({
	element: element,
	theme: theme,
	getInitialState: getInitialState,
	createProps: createProps,
	onMount: onMount,
	onUnmount: onUnmount
});

export { ripple as coreRipple, classes, vars$1 as vars };
