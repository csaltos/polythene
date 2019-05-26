!function(r,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-theme"],o):o((r=r||self).polythene={},r["polythene-core-css"],r["polythene-theme"])}(this,function(r,o,e){"use strict";function n(r,o,e){return o in r?Object.defineProperty(r,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[o]=e,r}function t(){return(t=Object.assign||function(r){for(var o=1;o<arguments.length;o++){var e=arguments[o];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r}).apply(this,arguments)}var a={general_styles:function(r){return[o.sel(r,{".pe-button--focus":{" .pe-button__focus":{opacity:1}}})]}},i=function(r){var e;return n(e={},"color_"+r,function(e,n){return[o.sel(e,{" .pe-button__content":{color:n["color_"+r]}})]}),n(e,"color_"+r+"_background",function(e,n){return[o.sel(e,{" .pe-button__content":{backgroundColor:n["color_"+r+"_background"]}})]}),n(e,"color_"+r+"_focus_background",function(e,n){return[o.sel(e,{".pe-button--focus":{" .pe-button__focus":{backgroundColor:n["color_"+r+"_focus_background"]}}})]}),n(e,"color_"+r+"_wash_background",function(e,n){return[o.sel(e,{".pe-button--focus":{" .pe-button__wash":{backgroundColor:n["color_"+r+"_wash_background"]}}})]}),e},_=t({},a,i("light")),c=t({},a,i("dark")),u=o.createColor({varFns:{lightTintFns:_,darkTintFns:c}}),l={general_styles:function(r){return[o.sel(r,{userSelect:"none","-moz-user-select":"none",display:"inline-block",position:"relative",outline:"none",cursor:"pointer",padding:0,border:"none"," .pe-button__content":{position:"relative",borderRadius:"50%"}," .pe-fab__content":{display:"flex",width:"100%",height:"100%",alignItems:"center",justifyContent:"center"}," .pe-button__wash, .pe-button__focus":[o.mixin.fit(),{borderRadius:"inherit"}]," .pe-ripple":{borderRadius:"inherit"}," .pe-button__wash":{transition:"background-color "+e.vars.animation_duration+" ease-in-out",borderRadius:"inherit",pointerEvents:"none",backgroundColor:"transparent"}})]},size_regular:function(r,e){return[o.sel(r,{" .pe-button__content":{width:e.size_regular+"px",height:e.size_regular+"px"}})]},size_mini:function(r,n){return[o.sel(r,{".pe-fab--mini":{" .pe-button__content":{width:n.size_mini+"px",height:n.size_mini+"px",padding:(n.size_mini-e.vars.unit_icon_size)/2+"px"}}})]}},s=o.createLayout({varFns:l}),d={general_styles:!0,size_mini:5*e.vars.grid_unit_component,size_regular:7*e.vars.grid_unit_component,color_light:o.rgba(e.vars.color_primary_foreground),color_light_focus_background:o.rgba(e.vars.color_light_foreground,e.vars.blend_light_background_hover),color_light_focus_opacity:e.vars.blend_light_background_hover_medium,color_light_background:o.rgba(e.vars.color_primary),color_light_wash_background:o.rgba(e.vars.color_light_foreground,e.vars.blend_light_background_hover),color_dark:o.rgba(e.vars.color_primary_foreground),color_dark_focus_background:o.rgba(e.vars.color_dark_foreground,e.vars.blend_dark_background_hover),color_dark_focus_opacity:e.vars.blend_dark_background_hover_medium,color_dark_background:o.rgba(e.vars.color_primary),color_dark_wash_background:o.rgba(e.vars.color_dark_foreground,e.vars.blend_dark_background_hover)},b=[s,u],g=".".concat("pe-fab"),p=o.styler.createAddStyle(g,b,d),f=o.styler.createGetStyle(g,b,d);o.styler.addStyle({selectors:[g],fns:b,vars:d}),r.addStyle=p,r.color=u,r.getStyle=f,r.layout=s,r.vars=d,Object.defineProperty(r,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-fab.js.map
