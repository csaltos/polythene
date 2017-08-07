[Back to Polythene Radio Button main page](../radio-button.md)

# Radio Button component for Mithril


## Options

* [Radio Button options](../radio-button.md)
* [Radio Group options](../radio-group.md)


## Usage

Radio buttons always come in groups. To simply show 2 radio buttons, without handling their state, does not make much sense:

~~~javascript
import m from "mithril"
import { RadioButton } from "polythene-mithril"

m("div", [
  m(RadioButton, {
    name: "company",
    value: "1",
    label: "One",
  }),
  m(RadioButton, {
    name: "company",
    value: "2",
    label: "Two",
  })
])
~~~

### Reading and setting the checked state

Radio Buttons will generally be used with a [Radio Group](radio-group.md) that manages the buttons' (singular) selected state.

Equivalent to the example above, now including state handling:

~~~javascript
import m from "mithril"
import { RadioGroup } from "polythene-mithril"

m(RadioGroup, {
  name: "company",
  buttons: [
    {
      value: "1",
      label: "One",
    },
    {
      value: "2",
      label: "Two",
    }
  ]
})
~~~

Note that `name` is required when using RadioGroup.

See also [Handling state](../handling-state.md).

To read the checked state, use `onChange`. But unlike [Checkbox](checkbox.md), the checked state does not need to be set explicitly - this is handled by Radio Group:

~~~javascript
m(RadioGroup, {
  onChange: state => vnode.state.checkedValue = state.value
})
~~~


## Appearance

Both Radio Button and Radio Group can be styled. 


### Styling

Below are examples how to change the Radio Button appearance, either with a theme or with CSS.

You can find more information about theming in [Theming](../theming.md).

#### Themed component

~~~javascript
RadioButton.theme(".themed-radio-button", {
  color_light_on:    "#2196F3",
  color_light_off:   "#2196F3",
  color_light_label: "#2196F3"
})

m(RadioButton, {
  className: "themed-radio-button"
})
~~~

#### CSS

Change CSS using the CSS classes in `polythene-core-radio-button/src/classes.js`

Class names can be imported with:

~~~javascript
import { classes } from "polythene-core-radio-button"
~~~


#### Style

Some style attributes can be set using option `style`. For example:

~~~javascript
m(RadioButton, {
  style: { color: "#2196F3" }
})
~~~

### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


