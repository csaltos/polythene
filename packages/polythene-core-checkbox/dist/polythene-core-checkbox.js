!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).polythene={})}(this,function(e){"use strict";function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n="pe-checkbox-control",c={iconOff:'<svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>',iconOn:'<svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'},o=Object.freeze({createProps:function(e){var o=e.attrs;return function(e){for(var n=1;n<arguments.length;n++){var c=null!=arguments[n]?arguments[n]:{},o=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(c).filter(function(e){return Object.getOwnPropertyDescriptor(c,e).enumerable}))),o.forEach(function(n){t(e,n,c[n])})}return e}({icons:c},o,{selectable:o.selectable||function(){return!0},instanceClass:n,type:"checkbox"})}});e.coreCheckbox=o,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-checkbox.js.map
