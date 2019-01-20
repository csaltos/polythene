!function(o,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-theme"],r):r((o=o||self).polythene={},o["polythene-core-css"],o["polythene-theme"])}(this,function(o,r,t){"use strict";function e(o,r,t){return r in o?Object.defineProperty(o,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[r]=t,o}function n(){return(n=Object.assign||function(o){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(o[e]=t[e])}return o}).apply(this,arguments)}var l={general_styles:function(o){return[r.sel(o,{" .pe-control__box":{" .pe-control__button":{color:"inherit"}," .pe-control__button--on":{color:"inherit"}}})]}},_=function(o){var t;return e(t={},"color_"+o+"_on",function(t,e){return[r.sel(t,{color:e["color_"+o+"_on"]})]}),e(t,"color_"+o+"_off",function(t,e){return[r.sel(t,{" .pe-control__button--off":{color:e["color_"+o+"_off"]}})]}),e(t,"color_"+o+"_disabled",function(t,e){return[r.sel(t,{".pe-control--disabled":{" .pe-control__label":{color:e["color_"+o+"_disabled"]}," .pe-control__box":{" .pe-control__button--on, .pe-control__button--off":{color:e["color_"+o+"_disabled"]}}}})]}),e(t,"color_"+o+"_label",function(t,e){return[r.sel(t,{" .pe-control__label":{color:e["color_"+o+"_label"]}})]}),e(t,"color_"+o+"_on_icon",function(t,e){return[r.sel(t,{" .pe-control__box":{" .pe-control__button--on":{color:e["color_"+o+"_on_icon"]}}})]}),e(t,"color_"+o+"_off_icon",function(t,e){return[r.sel(t,{" .pe-control__box":{" .pe-control__button--off":{color:e["color_"+o+"_off_icon"]}}})]}),e(t,"color_"+o+"_focus_on",function(t,e){return[r.sel(t,{".pe-control--on":{" .pe-button--focus .pe-button__focus":{backgroundColor:e["color_"+o+"_focus_on"]}}})]}),e(t,"color_"+o+"_focus_off",function(t,e){return[r.sel(t,{".pe-control--off":{" .pe-button--focus .pe-button__focus":{backgroundColor:e["color_"+o+"_focus_off"]}}})]}),e(t,"color_"+o+"_focus_on_opacity",function(t,e){return[r.sel(t,{".pe-control--on":{" .pe-button--focus .pe-button__focus":{opacity:e["color_"+o+"_focus_on_opacity"]}}})]}),e(t,"color_"+o+"_focus_off_opacity",function(t,e){return[r.sel(t,{".pe-control--off":{" .pe-button--focus .pe-button__focus":{opacity:e["color_"+o+"_focus_off_opacity"]}}})]}),e(t,"color_"+o+"_on_label",function(t,e){return[r.sel(t,{".pe-control--on":{" .pe-control__label":{color:e["color_"+o+"_on_label"]}}})]}),e(t,"color_"+o+"_off_label",function(t,e){return[r.sel(t,{".pe-control--off":{" .pe-control__label":{color:e["color_"+o+"_off_label"]}}})]}),t},c=n({},l,_("light")),i=n({},l,_("dark")),a=r.createColor({varFns:{lightTintFns:c,darkTintFns:i}}),u=function(o){return{}},f=function(o){return{}},s=function(o,t,n){var l;return r.sel(o,{" .pe-button.pe-control__button":(l={top:-(t.button_size-t.icon_size)/2+"px"},e(l,n?"right":"left",-(t.button_size-t.icon_size)/2+"px"),e(l,n?"left":"right","auto"),l)})},p=function(o,t,n){return r.sel(o,{" .pe-control__label":e({},n?"paddingRight":"paddingLeft",t.label_padding_before+"px")})},b=function(o,t,n){return r.sel(o,{" .pe-control__label":e({},n?"paddingLeft":"paddingRight",t.label_padding_after+"px")})},d={general_styles:function(o,t){return[r.sel(o,[u(t),{display:"inline-block",boxSizing:"border-box",margin:0,padding:0," input[type=checkbox], input[type=radio]":{display:"none"}," .pe-control__form-label":[r.flex.layoutHorizontal,r.flex.layoutCenter,{position:"relative",cursor:"pointer",margin:0,color:"inherit",":focus":{outline:0}}],".pe-control--inactive":{" .pe-control__form-label":{cursor:"default"}}," .pe-control__box":{position:"relative",display:"inline-block",boxSizing:"border-box",color:"inherit",flexShrink:0,":focus":{outline:0}}," .pe-button.pe-control__button":{position:"absolute"},".pe-control--off":{" .pe-control__button--on":{opacity:0,zIndex:-1}," .pe-control__button--off":{opacity:1,zIndex:0}},".pe-control--on":{" .pe-control__button--on":{opacity:1,zIndex:0}," .pe-control__button--off":{opacity:0,zIndex:-1}}," .pe-control__label":{alignSelf:"center"},".pe-control--disabled":{" .pe-control__form-label":{cursor:"auto"}," .pe-control__button":{pointerEvents:"none"}}," .pe-button__content":{flexShrink:0," .pe-icon":{position:"absolute"}}},e({},"*[dir=rtl] ".concat(o,", .pe-rtl ").concat(o),[f(t)])])]},label_font_size:function(o,t){return[r.sel(o,{" .pe-control__form-label":{fontSize:t.label_font_size+"px"}})]},label_height:function(o,r){return[]},animation_duration:function(o,t){return[r.sel(o,{" .pe-button.pe-control__button":[r.mixin.defaultTransition("opacity",t.animation_duration)]," .pe-control__label":[r.mixin.defaultTransition("all",t.animation_duration)]})]},button_size:function(o,t){return[r.sel(o,{}),s(o,t,!1),s(r.selectorRTL(o),t,!0)]},icon_size:function(o,t){return[r.sel(o,{}),s(o,t,!1),s(r.selectorRTL(o),t,!0)]},label_padding_after:function(o,t){return[r.sel(o,{}),b(o,t,!1),b(r.selectorRTL(o),t,!0)]},label_padding_before:function(o,t){return[r.sel(o,{}),p(o,t,!1),p(r.selectorRTL(o),t,!0)]}},g=r.createLayout({varFns:d}),y={general_styles:!0,animation_duration:t.vars.animation_duration,button_size:6*t.vars.grid_unit_component,label_height:5*t.vars.grid_unit_component,icon_size:3*t.vars.grid_unit_component,label_font_size:2*t.vars.grid_unit_component,label_padding_after:0,label_padding_before:4*t.vars.grid_unit,color_light_on:r.rgba(t.vars.color_primary),color_light_off:r.rgba(t.vars.color_light_foreground,t.vars.blend_light_text_secondary),color_light_label:r.rgba(t.vars.color_light_foreground,t.vars.blend_light_text_secondary),color_light_disabled:r.rgba(t.vars.color_light_foreground,t.vars.blend_light_text_disabled),color_light_thumb_off_focus_opacity:.08,color_light_thumb_on_focus_opacity:.11,color_light_focus_on:r.rgba(t.vars.color_primary),color_light_focus_on_opacity:.11,color_light_focus_off:r.rgba(t.vars.color_light_foreground),color_light_focus_off_opacity:.07,color_dark_on:r.rgba(t.vars.color_primary),color_dark_off:r.rgba(t.vars.color_dark_foreground,t.vars.blend_dark_text_secondary),color_dark_label:r.rgba(t.vars.color_dark_foreground,t.vars.blend_dark_text_secondary),color_dark_disabled:r.rgba(t.vars.color_dark_foreground,t.vars.blend_dark_text_disabled),color_dark_thumb_off_focus_opacity:.08,color_dark_thumb_on_focus_opacity:.11,color_dark_focus_on:r.rgba(t.vars.color_primary),color_dark_focus_on_opacity:.14,color_dark_focus_off:r.rgba(t.vars.color_dark_foreground),color_dark_focus_off_opacity:.09},h=[g,a],v=".".concat("pe-control"),x=r.styler.createAddStyle(v,h,y),m=r.styler.createGetStyle(v,h,y);r.styler.addStyle({selectors:[v],fns:h,vars:y}),o.addStyle=x,o.getStyle=m,o.color=a,o.layout=g,o.vars=y,Object.defineProperty(o,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-selection-control.js.map
