!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core")):"function"==typeof define&&define.amd?define(["exports","polythene-core"],t):t((e=e||self).polythene={},e["polythene-core"])}(this,function(e,t){"use strict";function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.forEach(function(t){n(e,t,o[t])})}return e}var c="pe-switch-control",i="pe-switch-control__knob",a="pe-switch-control__thumb",s="pe-switch-control__track",f=Object.freeze({createProps:function(e){var t=e.attrs;return o({},t,{selectable:t.selectable||function(){return!0},instanceClass:c,type:"checkbox"})}}),l=Object.freeze({getElement:function(e){return e.attrs.element||"div"},onMount:function(e){var n=e.attrs;void 0!==n.zOn&&t.deprecation("Switch",{option:"zOn",newOption:"shadowDepthOn"}),void 0!==n.zOff&&t.deprecation("Switch",{option:"zOff",newOption:"shadowDepthOff"})},createContent:function(e,t){var n=t.renderer,o=t.Shadow,c=t.IconButton,f=e.attrs,l=void 0!==f.shadowDepthOff?f.shadowDepthOff:void 0!==f.zOff?f.zOff:1,p=void 0!==f.shadowDepthOn?f.shadowDepthOn:void 0!==f.zOn?f.zOn:2,u=f.checked?p:l,d=void 0===f.raised||f.raised;return[n("div",{className:s,key:"track"},n(c,r({className:a,content:n("div",{className:i},[f.icon?f.icon:null,d?n(o,{shadowDepth:u,animated:!0}):null]),style:f.style,disabled:f.disabled,events:f.events,ink:f.ink||!1,inactive:f.inactive},f.iconButton)))]}});e.coreSwitch=f,e.coreViewControl=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-switch.js.map
