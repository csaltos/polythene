!function(o,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-theme"],e):e((o=o||self).polythene={},o["polythene-core-css"],o["polythene-theme"])}(this,function(o,e,t){"use strict";function r(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function n(){return(n=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(o[r]=t[r])}return o}).apply(this,arguments)}var l={general_styles:function(o){return[e.sel(o,{" .pe-control__box":{" .pe-control__button":{color:"inherit"}," .pe-control__button--on":{color:"inherit"}}})]}},_=function(o){var t;return r(t={},"color_"+o+"_on",function(t,r){return[e.sel(t,{color:r["color_"+o+"_on"]})]}),r(t,"color_"+o+"_off",function(t,r){return[e.sel(t,{" .pe-control__button--off":{color:r["color_"+o+"_off"]}})]}),r(t,"color_"+o+"_disabled",function(t,r){return[e.sel(t,{".pe-control--disabled":{" .pe-control__label":{color:r["color_"+o+"_disabled"]}," .pe-control__box":{" .pe-control__button--on, .pe-control__button--off":{color:r["color_"+o+"_disabled"]}}}})]}),r(t,"color_"+o+"_label",function(t,r){return[e.sel(t,{" .pe-control__label":{color:r["color_"+o+"_label"]}})]}),r(t,"color_"+o+"_on_icon",function(t,r){return[e.sel(t,{" .pe-control__box":{" .pe-control__button--on":{color:r["color_"+o+"_on_icon"]}}})]}),r(t,"color_"+o+"_off_icon",function(t,r){return[e.sel(t,{" .pe-control__box":{" .pe-control__button--off":{color:r["color_"+o+"_off_icon"]}}})]}),r(t,"color_"+o+"_focus_on",function(t,r){return[e.sel(t,{".pe-control--on":{" .pe-button--focus":{" .pe-button__focus":{backgroundColor:r["color_"+o+"_focus_on"]}}}})]}),r(t,"color_"+o+"_focus_off",function(t,r){return[e.sel(t,{".pe-control--off":{" .pe-button--focus":{" .pe-button__focus":{backgroundColor:r["color_"+o+"_focus_off"]}}}})]}),r(t,"color_"+o+"_focus_on_opacity",function(t,r){return[e.sel(t,{".pe-control--on":{" .pe-button--focus":{" .pe-button__focus":{opacity:r["color_"+o+"_focus_on_opacity"]}}}})]}),r(t,"color_"+o+"_focus_off_opacity",function(t,r){return[e.sel(t,{".pe-control--off":{" .pe-button--focus":{" .pe-button__focus":{opacity:r["color_"+o+"_focus_off_opacity"]}}}})]}),r(t,"color_"+o+"_on_label",function(t,r){return[e.sel(t,{".pe-control--on":{" .pe-control__label":{color:r["color_"+o+"_on_label"]}}})]}),r(t,"color_"+o+"_off_label",function(t,r){return[e.sel(t,{".pe-control--off":{" .pe-control__label":{color:r["color_"+o+"_off_label"]}}})]}),t},c=n({},l,_("light")),i=n({},l,_("dark")),a=e.createColor({varFns:{lightTintFns:c,darkTintFns:i}}),u=function(o){return{}},s=function(o){return{}},f=function(o,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.vars.unit_icon_size,l=n+o.label_height,_=(l-n)/2;return{" .pe-control__form-label":{height:r+"px"}," .pe-control__box":{width:n+"px",height:n+"px"}," .pe-button__content":{width:l+"px",height:l+"px",flexShrink:0," .pe-icon":[e.mixin.fit(_)]}}},p=function(o,t,n){var l;return e.sel(o,{" .pe-button.pe-control__button":(l={top:-(t.button_size-t.icon_size)/2+"px"},r(l,n?"right":"left",-(t.button_size-t.icon_size)/2+"px"),r(l,n?"left":"right","auto"),l)})},b=function(o,t,n){return e.sel(o,{" .pe-control__label":r({},n?"paddingRight":"paddingLeft",t.label_padding_before+"px")})},d=function(o,t,n){return e.sel(o,{" .pe-control__label":r({},n?"paddingLeft":"paddingRight",t.label_padding_after+"px")})},g={general_styles:function(o,t){return[e.sel(o,[u(t),{display:"inline-block",boxSizing:"border-box",margin:0,padding:0," input[type=checkbox], input[type=radio]":{display:"none"}," .pe-control__form-label":[e.flex.layoutHorizontal,e.flex.layoutCenter,{position:"relative",cursor:"pointer",margin:0,color:"inherit",":focus":{outline:0}}],".pe-control--inactive":{" .pe-control__form-label":{cursor:"default"}}," .pe-control__box":{position:"relative",display:"inline-block",boxSizing:"border-box",color:"inherit",flexShrink:0,":focus":{outline:0}}," .pe-button.pe-control__button":{position:"absolute"},".pe-control--off":{" .pe-control__button--on":{opacity:0,zIndex:-1}," .pe-control__button--off":{opacity:1,zIndex:0}},".pe-control--on":{" .pe-control__button--on":{opacity:1,zIndex:0}," .pe-control__button--off":{opacity:0,zIndex:-1}}," .pe-control__label":{alignSelf:"center"},".pe-control--disabled":{" .pe-control__form-label":{cursor:"auto"}," .pe-control__button":{pointerEvents:"none"}}," .pe-button__content":{" .pe-icon":{position:"absolute"}}},r({},"*[dir=rtl] ".concat(o,", .pe-rtl ").concat(o),[s(t)])])]},label_font_size:function(o,t){return[e.sel(o,{" .pe-control__form-label":{fontSize:t.label_font_size+"px"}})]},label_height:function(o,r){return[e.sel(o,{" .pe-control__box":{width:r.label_height+"px",height:r.label_height+"px"},".pe-control--small":f(r,t.vars.unit_icon_size_small,t.vars.unit_icon_size_small),".pe-control--regular":f(r,r.label_height,t.vars.unit_icon_size),".pe-control--medium":f(r,t.vars.unit_icon_size_medium,t.vars.unit_icon_size_medium),".pe-control--large":f(r,t.vars.unit_icon_size_large,t.vars.unit_icon_size_large)})]},animation_duration:function(o,t){return[e.sel(o,{" .pe-button.pe-control__button":[e.mixin.defaultTransition("opacity",t.animation_duration)]," .pe-control__label":[e.mixin.defaultTransition("all",t.animation_duration)]})]},button_size:function(o,t){return[e.sel(o,{}),p(o,t,!1),p(e.selectorRTL(o),t,!0)]},icon_size:function(o,t){return[e.sel(o,{}),p(o,t,!1),p(e.selectorRTL(o),t,!0)]},label_padding_after:function(o,t){return[e.sel(o,{}),d(o,t,!1),d(e.selectorRTL(o),t,!0)]},label_padding_before:function(o,t){return[e.sel(o,{}),b(o,t,!1),b(e.selectorRTL(o),t,!0)]}},h=e.createLayout({varFns:g}),y={general_styles:!0,animation_duration:t.vars.animation_duration,button_size:6*t.vars.grid_unit_component,icon_size:3*t.vars.grid_unit_component,label_font_size:2*t.vars.grid_unit_component,label_height:3*t.vars.grid_unit_component,label_padding_after:0,label_padding_before:4*t.vars.grid_unit,color_light_on:e.rgba(t.vars.color_primary),color_light_off:e.rgba(t.vars.color_light_foreground,t.vars.blend_light_text_secondary),color_light_label:e.rgba(t.vars.color_light_foreground,t.vars.blend_light_text_secondary),color_light_disabled:e.rgba(t.vars.color_light_foreground,t.vars.blend_light_text_disabled),color_light_thumb_off_focus_opacity:.08,color_light_thumb_on_focus_opacity:.11,color_light_focus_on:e.rgba(t.vars.color_primary),color_light_focus_on_opacity:.11,color_light_focus_off:e.rgba(t.vars.color_light_foreground),color_light_focus_off_opacity:.07,color_dark_on:e.rgba(t.vars.color_primary),color_dark_off:e.rgba(t.vars.color_dark_foreground,t.vars.blend_dark_text_secondary),color_dark_label:e.rgba(t.vars.color_dark_foreground,t.vars.blend_dark_text_secondary),color_dark_disabled:e.rgba(t.vars.color_dark_foreground,t.vars.blend_dark_text_disabled),color_dark_thumb_off_focus_opacity:.08,color_dark_thumb_on_focus_opacity:.11,color_dark_focus_on:e.rgba(t.vars.color_primary),color_dark_focus_on_opacity:.14,color_dark_focus_off:e.rgba(t.vars.color_dark_foreground),color_dark_focus_off_opacity:.09},v=[h,a],x=".".concat("pe-control"),m=e.styler.createAddStyle(x,v,y),z=e.styler.createGetStyle(x,v,y);e.styler.addStyle({selectors:[x],fns:v,vars:y}),o.addStyle=m,o.color=a,o.getStyle=z,o.layout=h,o.vars=y,Object.defineProperty(o,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-selection-control.js.map
