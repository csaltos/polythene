import { customTheme } from "./theme";
import classes from "./classes";

export const theme = customTheme;

// Don't export 'element': it will be the wrapped selection control component (set in polythene-xxx-checkbox)

// Props to be passed to a selection control

export const createProps = vnode => {
  const attrs = vnode.attrs;
  return Object.assign(
    {},
    attrs,
    {
      theme,
      selectable: attrs.selectable || (() => true), // default: always selectable, regardless the checked state
      instanceClass: classes.component,
      type: "checkbox"
    }
  );
};