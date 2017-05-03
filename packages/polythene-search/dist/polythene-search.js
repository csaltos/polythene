!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("mithril"),require("polythene-textfield"),require("polythene-core-essentials"),require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-textfield","polythene-core-essentials","polythene-core-css","polythene-theme"],t):t(e.polythene=e.polythene||{},e.m,e["polythene-textfield"],e["polythene-core-essentials"],e["polythene-core-css"],e["polythene-theme"])}(this,function(e,t,i,n,r,l){"use strict";function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}t="default"in t?t.default:t,i="default"in i?i.default:i;var d={component:"pe-search",content:"pe-search__content",searchFullWidth:"pe-search--full-width",searchInset:"pe-search--inset"},_=l.vars.rgba,p=l.vars.unit_block_border_radius,u={font_size_input:20,line_height_input:20,inset_height:48,inset_input_indent:16,inset_side_padding:0,inset_input_right_padding:0,inset_border_radius:p,full_width_height:56,full_width_side_margin:0,full_width_side_padding:8,full_width_input_right_padding:0,full_width_border_radius:0,color_light_label_text:_(l.vars.color_light_foreground,l.vars.blend_light_text_disabled),color_light_input_text:_(l.vars.color_light_foreground,l.vars.blend_light_text_primary),color_light_background:_(l.vars.color_light_background),color_dark_label_text:_(l.vars.color_dark_foreground,l.vars.blend_dark_text_disabled),color_dark_input_text:_(l.vars.color_dark_foreground,l.vars.blend_dark_text_primary),color_dark_background:_(l.vars.color_dark_background)},s=function(e,t){var i=(t.inset_height-t.line_height_input)/2,n=(t.full_width_height-t.line_height_input)/2,a=l.vars.unit_indent-t.full_width_side_padding-l.vars.grid_unit_icon_button;return[o({},e,[r.flex.flex(),{position:"relative"," .pe-textfield":[r.flex.flex(),{padding:0,position:"relative",zIndex:1," .pe-textfield__input-area":{padding:0,":after":{display:"none"}}," .pe-textfield__input, .pe-textfield__label":{fontSize:t.font_size_input+"px",lineHeight:t.line_height_input+"px"}," .pe-textfield__input":{border:"none"}," .pe-textfield__label":{top:0,bottom:0}}]," .pe-search__content":r.flex.layoutHorizontal," .pe-search__content > *":[r.flex.layoutVertical,r.flex.selfCenter],".pe-search--inset":{"border-radius":t.inset_border_radius+"px",padding:"0 "+t.inset_side_padding+"px","&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label":{padding:0,height:t.inset_height+"px"}," .pe-textfield__input, .pe-textfield__label":{paddingTop:i+"px",paddingBottom:i+"px",paddingLeft:t.inset_input_indent+"px",paddingRight:t.inset_input_right_padding+"px"}},".pe-search--full-width":{borderRadius:t.full_width_border_radius+"px",padding:"0 "+t.full_width_side_padding+"px","&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label":{height:t.full_width_height+"px"}," .pe-textfield__input, .pe-textfield__label":{paddingTop:n+"px",paddingBottom:n+"px",paddingLeft:a+"px",paddingRight:t.full_width_input_right_padding+"px"}}}])]},f=function(e,t,i,n){return[a({},e.map(function(e){return e+t}).join(","),{backgroundColor:i["color_"+n+"_background"]," .pe-textfield":{" .pe-textfield__label":{color:i["color_"+n+"_label_text"]}," .pe-textfield__input":{color:i["color_"+n+"_input_text"]}," .pe-textfield__input-area":{backgroundColor:"transparent"}}})]},h=function(e,t){return[f([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),f(["",".pe-light-tone",".pe-light-tone "],e,t,"light")]},c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},g=[s,h],x="."+d.component,b=function(e,t){return r.styler.generateStyles([e,x],c({},u,t),g)};r.styler.generateStyles([x],u,g);var y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},v=function(e){return e.focus&&e.dirty?"focus_dirty":e.focus?"focus":e.dirty?"dirty":"none"},m=function(e){var r=e.state,l=e.attrs,o=l.element||"div",a=y({},n.filterSupportedAttributes(l),{class:[d.component,l.fullWidth?d.searchFullWidth:d.searchInset,"dark"===l.tone?"pe-dark-tone":null,"light"===l.tone?"pe-light-tone":null,l.class].join(" ")},l.events),_=v(r.searchState),p=(l.buttons||{})[_]||{},u=l.textfield||{},s=t("div",{class:d.content},[p.before,t(i,y({},u,{getState:function(e){r.searchState=y({},e),u.getState&&u.getState(r.searchState)}})),p.after]);return t(o,a,[l.before,s,l.after])},k={theme:b,oninit:function(e){e.state.searchState={}},view:m};e.default=k,e.classes=d,e.vars=u,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-search.js.map
