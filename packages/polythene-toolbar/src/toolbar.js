import m from "mithril";
import { filterSupportedAttributes } from "polythene-core-essentials";
import { customTheme } from "./theme";
import classes from "./classes";

const view = vnode => {
  const attrs = vnode.attrs;
  const element = attrs.element || "div";
  const props = Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      class: [
        classes.component,
        attrs.compact ? classes.compact : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.class
      ].join(" ")
    },
    attrs.events ? attrs.events : null
  );
  const content = attrs.content
    ? attrs.content
    : attrs.children || vnode.children;
  return m(element, props, [attrs.before, content, attrs.after]);
};

export default {
  theme: customTheme, // accepts (selector, vars)
  view
};
