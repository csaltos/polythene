!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("polythene-mithril-base"),require("polythene-core"),require("polythene-core-spinner"),require("polythene-mithril-shadow")):"function"==typeof define&&define.amd?define(["exports","polythene-mithril-base","polythene-core","polythene-core-spinner","polythene-mithril-shadow"],n):n(e.polythene=e.polythene||{},e["polythene-mithril-base"],e["polythene-core"],e["polythene-core-spinner"],e["polythene-mithril-shadow"])}(this,function(e,n,r,t,o){"use strict";var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},a=n.StateComponent(i({},t.coreBaseSpinner,{createContent:function(e,n){return t.coreBaseSpinner.createContent(e,i(n,{Shadow:o.Shadow}))}}));a.displayName="BaseSpinner",a.classes=t.coreBaseSpinner.classes;var p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},s=n.ViewComponent(p({},t.coreMaterialDesignSpinner,{component:a})),l=n.StateComponent(r.Conditional),c={view:function(e){return n.renderer(l,p({},e.attrs,{placeholderClassName:a.classes.placeholder,instance:s}))}};c.theme=t.coreMaterialDesignSpinner.theme,c.displayName="MaterialDesignSpinner",e.SpinnerInstance=s,e.MaterialDesignSpinner=c,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-spinner.js.map
