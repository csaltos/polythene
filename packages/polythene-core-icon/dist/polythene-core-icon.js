!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("polythene-core-essentials"),require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-essentials","polythene-core-css","polythene-theme"],r):r(e.polythene=e.polythene||{},e["polythene-core-essentials"],e["polythene-core-css"],e["polythene-theme"])}(this,function(e,r,n,t){"use strict";function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var l={component:"pe-icon",avatar:"pe-icon--avatar",large:"pe-icon--large",medium:"pe-icon--medium",regular:"pe-icon--regular",small:"pe-icon--small"},a={size_small:t.vars.unit_icon_size_small,size_regular:t.vars.unit_icon_size,size_medium:t.vars.unit_icon_size_medium,size_large:t.vars.unit_icon_size_large,color_light:"currentcolor",color_dark:"currentcolor"},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.vars.unit_icon_size;return{width:e+"px",height:e+"px"}},c=function(e,r){return[i({},e,{display:"inline-block",verticalAlign:"middle",backgroundRepeat:"no-repeat",position:"relative",fontSize:0,lineHeight:0,".pe-icon--avatar img":{border:"none",borderRadius:"50%",width:"inherit",height:"inherit"}," img":{height:"inherit"}," .pe-svg":{width:"inherit",height:"inherit"},".pe-icon--small":s(r.size_small),".pe-icon--regular":s(r.size_regular),".pe-icon--medium":s(r.size_medium),".pe-icon--large":s(r.size_large)})]},u=function(e,r,n,t){return[o({},e.map(function(e){return e+r}).join(","),{color:n["color_"+t]||"currentcolor"})]},p=function(e,r){return[u([".pe-dark-tone",".pe-dark-tone "],e,r,"dark"),u(["",".pe-light-tone",".pe-light-tone "],e,r,"light")]},g=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},h=[c,p],m="."+l.component,d=function(e,r){return n.styler.generateStyles([e,m],g({},a,r),h)};n.styler.generateStyles([m],a,h);var v=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},f=d,y={small:l.small,regular:l.regular,medium:l.medium,large:l.large},_=function(){return y[arguments.length>0&&void 0!==arguments[0]?arguments[0]:"regular"]},b=function(e,n){var t=n.keys,i=e.attrs;return v({},r.filterSupportedAttributes(i),{className:[l.component,_(i.type),i.avatar?l.avatar:null,"dark"===i.tone?"pe-dark-tone":null,"light"===i.tone?"pe-light-tone":null,i.className||i[t.class]].join(" ")},i.events?i.events:null)},z=function(e,r){var n=r.renderer,t=r.svg,i=e.attrs;return i.content?i.content:i.svg?n(t,i.svg):i.msvg?n(t,i.msvg):i.src?n("img",{src:i.src}):i.children||e.children},j={createProps:b,createContent:z,theme:f,element:"div",classes:l,vars:a};e.icon=j,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-icon.js.map
