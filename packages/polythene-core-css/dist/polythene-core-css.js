!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-theme"),require("j2c-plugin-prefix-browser"),require("j2c")):"function"==typeof define&&define.amd?define(["exports","polythene-theme","j2c-plugin-prefix-browser","j2c"],t):t(e.polythene=e.polythene||{},e["polythene-theme"],e["j2c-plugin-prefix-browser"],e.j2c)}(this,function(e,t,i,n){"use strict";n="default"in n?n.default:n;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},r={clearfix:function(){return{"&:after":{content:'""',display:"table",clear:"both"}}},defaultTransition:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all";return{transitionDelay:0,transitionDuration:arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.vars.animation_duration,transitionTimingFunction:arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.vars.animation_curve_default,transitionProperty:e}},ellipsis:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"px";return"none"===e?{textOverflow:"initial",overflow:"initial",display:"block",height:"auto",maxHeight:"none"}:l({},{overflow:"hidden",textOverflow:"ellipsis",textRendering:"auto"},void 0!==e?{"-webkit-line-clamp":e,"-webkit-box-orient":"vertical",display:"-webkit-box"}:null,void 0!==t?{maxHeight:e*t+i}:null)},fit:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)+"px";return{position:"absolute",top:e,right:e,bottom:e,left:e}},fontSmoothing:function(){return!(arguments.length>0&&void 0!==arguments[0])||arguments[0]?{"-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale"}:{"-webkit-font-smoothing":"subpixel-antialiased","-moz-osx-font-smoothing":"auto"}},sticky:function(){return{position:"sticky",top:0,zIndex:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}}},o=[{display:"-webkit-box"},{display:"-moz-box"},{display:"-ms-flexbox","-ms-flex-preferred-size":"initial"},{display:"-webkit-flex"},{display:"flex"}],a=[o,{"-ms-flex-align":"center","-webkit-align-items":"center","align-items":"center"}],s=[o,{"-ms-flex-pack":"center","-webkit-justify-content":"center","justify-content":"center"}],f={flex:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return[{"-webkit-box-flex":e},{"-moz-box-flex":e},{"-webkit-flex":e},{"-ms-flex":e},{flex:e},1===e?{"-webkit-flex-basis":"0.000000001px"}:{},1===e?{"flex-basis":"0.000000001px"}:{}]},flexAuto:{"-ms-flex":"1 1 auto","-webkit-flex-basis":"auto","flex-basis":"auto"},flexAutoVertical:{"-ms-flex":"1 1 auto","-webkit-flex-basis":"auto","flex-basis":"auto"},flexIndex:function(e){return{"-ms-flex":e,"-webkit-flex":e,flex:e}},flexGrow:function(e){return{"-webkit-flex-grow":e,"flex-grow":e}},layout:o,layoutAroundJustified:[o,{"-ms-flex-pack":"distribute","-webkit-justify-content":"space-around","justify-content":"space-around"}],layoutCenter:a,layoutCenterCenter:[s,a],layoutCenterJustified:s,layoutEnd:[o,{"-ms-flex-align":"end","-webkit-align-items":"flex-end","align-items":"flex-end"}],layoutEndJustified:[o,{"-ms-flex-pack":"end","-webkit-justify-content":"flex-end","justify-content":"flex-end"}],layoutHorizontal:[o,{"-ms-flex-direction":"row","-webkit-flex-direction":"row","flex-direction":"row"}],layoutHorizontalReverse:[o,{"-ms-flex-direction":"row-reverse","-webkit-flex-direction":"row-reverse","flex-direction":"row-reverse"}],layoutInline:[o,{display:"-ms-inline-flexbox"},{display:"-webkit-inline-flex"},{display:"inline-flex"}],layoutJustified:[o,{"-ms-flex-line-pack":"stretch","-ms-flex-pack":"justify","-webkit-justify-content":"space-between","justify-content":"space-between"}],layoutStart:[o,{"-ms-flex-align":"start","-webkit-align-items":"flex-start","align-items":"flex-start"}],layoutStartJustified:[o,{"-ms-flex-align":"start","-ms-flex-pack":"start","-webkit-justify-content":"flex-start","justify-content":"flex-start"}],layoutVertical:[o,{"-ms-flex-direction":"column","-webkit-flex-direction":"column","flex-direction":"column"}],layoutVerticalReverse:[o,{"-ms-flex-direction":"column-reverse","-webkit-flex-direction":"column-reverse","flex-direction":"column-reverse"}],layoutWrap:[o,{"-ms-flex-wrap":"wrap","-webkit-flex-wrap":"wrap","flex-wrap":"wrap"}],layoutWrapReverse:[o,{"-ms-flex-wrap":"wrap-reverse","-webkit-flex-wrap":"wrap-reverse","flex-wrap":"wrap-reverse"}],selfCenter:{"-ms-flex-item-align":"center","-ms-align-self":"center","-webkit-align-self":"center","align-self":"center"},selfEnd:{"-ms-flex-item-align":"end","-ms-align-self":"flex-end","-webkit-align-self":"flex-end","align-self":"flex-end"},selfStart:{"-ms-flex-item-align":"start","-ms-align-self":"flex-start","-webkit-align-self":"flex-start","align-self":"flex-start"},selfStretch:{"-ms-flex-item-align":"stretch","-ms-align-self":"stretch","-webkit-align-self":"stretch","align-self":"stretch"}},u=new n(i.prefixPlugin),c=/[^a-z0-9\-]/g,x=function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];p.apply(void 0,[{id:e}].concat(i))},d=function(e){if(e){var t=document.getElementById(e);t&&t.parentNode&&t.parentNode.removeChild(t)}},p=function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];var l=e.id.replace(c,"_"),r=e.document||window.document;d(l);var o=r.createElement("style");l&&o.setAttribute("id",l),i.forEach(function(e){Object.keys(e).length&&e.forEach(function(e){var t={"@global":e},i=u.sheet(t);o.appendChild(r.createTextNode(i))})}),r.head.appendChild(o)},m={add:x,addToDocument:p,remove:d,generateStyles:function(e,t,i){var n=e.join(""),l=n.trim().replace(/^[^a-z]?(.*)/,"$1");x(l,i.map(function(e){return e(n,t)}))}};e.mixin=r,e.flex=f,e.styler=m,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-css.js.map
