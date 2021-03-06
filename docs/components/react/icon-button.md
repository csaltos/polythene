[Back to Polythene Icon Button main page](../icon-button.md)

# Icon Button component for React

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Options](#options)
- [Usage](#usage)
  - [Links](#links)
  - [Label](#label)
- [Appearance](#appearance)
  - [Interactivity](#interactivity)
  - [Size](#size)
  - [Styling](#styling)
    - [Themed component](#themed-component)
    - [CSS](#css)
    - [Style](#style)
  - [RTL (right-to-left) support](#rtl-right-to-left-support)
  - [Dark or light tone](#dark-or-light-tone)

<!-- /MarkdownTOC -->


<a id="options"></a>
## Options

[Icon Button options](../icon-button.md)



<a id="usage"></a>
## Usage

Icon Button takes an icon options object.

<a href="https://flems.io/#0=N4IgzgxgTg9gNnEAuA2gBgDRoLoZAMwEs4BTMZFUAOwEMBbE5EAOgAsAXOxPCGK9kvyYAeOISoBrAASsoJfAF4AOiA7sADmCQB6bTSjtWAVygRSDKmGYBzQoaMAjZoRh6wYEuzDb18AJ6GgiTaJAAe9Oqk3vjmVhDuKlJycMrg7H5RrCSeKgB8SlTCkFCE6uxSYKapapo6egbGpuaCVrb2Ti5uHl4+-oFUwWDsNFQAJjRwfMG+cAFZAwC0cjQQ7L2z-SRLJCvsC0Mj45MDzABWYHnC2sWl7PmFN2UVVSo1Wrr69k0kFq12xh1XDR3J5vDM5kFrsMxhMpusIYt4mC+vMtkj9tCjlMzhcQLkro87gUCsJRoQAG5SQijVKwGDsS7aMnk3IgPAeUirFyWJgARiQaBAAF8MNR6IwkCxzmyQLx+IJ2Ew5UMpMApABJOUAISM7HYfAwGrlhoAygA1ADiUiFUgUUnBmwA3AVleU1Zq+Dq9XwAMImk3W232lFBP0m51UAoeqhe-VUMPMGijUYm9KkAAUKmYgQYowWhDlCwcurjKkNwAKUntSbJVGsSCrjabzarvIAbBhK1JeJMoAB9MTWDgNlvNlQAYnwU7LXZ7MH7g44fYcKwk1lgRjGDYnU95AHYACwHmdUKtz-vjKASZer9cwTejEcTiAAVl57YATCehQBKCMuvgVQLPhzStO0inJawpAAd2pQxUg-Y8QBkEhCCHdgEKQqRyUIEhoK1GBQlSNApBIxCpEQy51BoQwpBpFQAFleQ-KR92YD89wAGV5AAOZheIo3k4AWXlmDbA8Fj3Zg0AAZk4j8WIATnYg9hKk3lFIWMTeW4lilP4xSpD4tsZIoqRlMQuAX2YA82ykA9mD3OTrJ4vTeQALxUbR8WuSDcgjV0pBockaP0ABVKA4CDV49XUOpPkaMwfhaGx-kcZwgRBHoHVREJwjoSIyD0ELhigETmHUOsVH-KhAoAQXUdQg3TH9bVyKQu1JCl7ibLrKTMYEwAAOXFWkYGgqQqHpEg8i7XqaBkORFBijR3nqL4kt+VL2gy+FNgWUYfhgbxllWbRx20YCqCLEs+ESUrrE8VJlzgEYJDyE1siCuAwBgBsAAUQwGKR8HnKQACUdlWKQFiNPgpFjeHDroGArhoHrGyuZkMarPru1e9wRoYMboNm09mzxgbCdGlR2DsUgPsIdyyCx7q5sx5l8cGomSFSXgCqmfgydHVUUBUMA6AmOAyw6kA5GsIxXqgGWVFzQgjDoFWQCVx6VGwZhJfUdMwCZkg2vZpslHYYRo0R08JBIPwFGAE3maFfFowqU3nddkh3eEUDcmAK7QKFK5A6uaMfNt26qBx5sfyFC2pFZll2dT+PKYJ4aabl8bhYpzmqZz4nafpma8R9GACt2DPk6z7nc-53wBiFvFk9xmPvVPZvdg9uV8UD4O5VD8PLWjgfI+1WP49xpk2fJufsfTovs55kmC961fG9LkA6fYBm8QY+8PBkGByRIKA68XjmKS56nd+bwWGXbm-eq7uMYOBVh+74Qfx+HiBS0YdtAR20FHKenoZ713nmnG+18t532LuvFQsBSavxbA3B+vMy4HwrrkH0RghjVySKUQqUh0wQAVJfH8CDC5ILXk3auLcFSbwph-eGJRGqkGdmqKh8ooANnYFAIwZshT+wgUPEOwCx4Wgnn-SBMZoFvxTrAzOaiV4MJ3jgvO6DZ4p23tg1I+9D65FTBkEgow6GIP6owx+zDn5sPftPbuFQ0y82AHw+A85twgEnPgRSPE0BoESOI3+ccA4AOkRaEBYCIHgJcXGfR1jVHL3gYYkuOi0FOIMVooxuDTEABUsi5hSbjDJKDZQONbi-fRndEnw2QbnHMlj8yFmLN3S4kiokjxkaA8eij5FKO7skjR8Cxk2Pvpkkm9otiXgkAsOM+D64VOaeXRmzMwAUPmVIJZtCJn0Nsdovm1TWEYNHMAMW4BJYIC1vLRW+gtZqw1lrHWFd9aG2Nqbc2KiqxWxtg0+2jsfamwkXKL2zMQVu3-nIwBVBR79LkYMxRds6lSETjAtJvUDnXwKJDXYAARAA8gxZgcgxiX0zOTYQDUmreU7OTUYMAIAawVDYTwABRZo-AtR+HVKMTMed6QqB-AUP8Mpm7EEvkwFcDgSDcHAPKkgXJAJMDbIpJAH5hSihALQBgTBmBIglXwAQQhJTClwNrcQEhyCoDFPqyUp12DMEOhfSY6gLDOulHgEwiBJRvDqJudQa5DXV20E67QGtRjhqhs6118qYAerZd6vefh1ASnANAW42r7UZqdQdauLqSBusTZ6nEMpfVMADboINIb+Yxt2AWugka6DRvzUyugRaS1Jv4OWvA6R01MEJBaoUQA" target="_blank"><img src="https://arthurclemens.github.io/assets/polythene/docs/try-out-green.gif" height="36" /></a>

```jsx
import React from "react"
import { IconButton } from "polythene-react"

const starsSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>

<IconButton icon={{ svg: { content: starsSVG } }} />
```

Instead of passing `icon` as option, the Icon component can be used as child:

```jsx
import { IconButton, Icon } from "polythene-react"

<IconButton><Icon svg={{ content: starsSVG }} /></IconButton>
```

Or even:

```jsx
import { IconButton, Icon, SVG } from "polythene-react"

<IconButton><Icon><SVG>{starsSVG}</SVG></Icon></IconButton>
```

See [Icon](../icon.md) for more Icon options.


<a id="links"></a>
### Links

See: [URLs and router links](../../handling-urls.md)


<a id="label"></a>
### Label

The Material Design specs do not specifically show a label with Icon Buttons, but Checkboxes with a custom icon provide the example how they should look like.

```jsx
<IconButton label="Label"><Icon><SVG>{starsSVG}</SVG></Icon></IconButton>
```


<a id="appearance"></a>
## Appearance

Pass [Button](../button.md) options to change the behaviour and appearance - see some examples below.


<a id="interactivity"></a>
### Interactivity

Disable hover and ripple effects:

```jsx
<IconButton icon={{ svg: { content: starsSVG } }} wash={false} ink={false} />
```


Alternatively, use `inactive`:

```jsx
<IconButton icon={{ svg: { content: starsSVG } }} inactive />
```


<a id="size"></a>
### Size

`compact` reduces the button padding:

```jsx
<IconButton icon={{ svg: { content: starsSVG } }} compact />
```


<a id="styling"></a>
### Styling

Below are examples how to change the icon button appearance, either with a theme or with CSS.

You can find more information about theming in  [Theming](../../theming.md).

<a id="themed-component"></a>
#### Themed component

```jsx
import { IconButtonCSS } from "polythene-css"

IconButtonCSS.addStyle(".themed-icon-button", {
  padding:                24,
  color_light_background: "purple",
  color_dark_background:  "orange",
  color_light:            "white"
})

<IconButton
  icon={{ svg: { content: starsSVG } }}
  className="themed-icon-button"
/>
```

To create a hover effect:

```javascript
IconButtonCSS.addStyle(".hover-icon-button", {
  color_light_hover:            "#fff",
  color_light_label_hover:      "#673ab7",
  color_light_hover_background: "#673ab7",
  animation_duration:           "100ms",
})

<IconButton
  icon={{ svg: { content: starsSVG } }}
  className="hover-icon-button"
/>
```

<a id="css"></a>
#### CSS

Change CSS using the [Icon Button CSS classes](../../../packages/polythene-css-classes/icon-button.js).

Class names can be imported with:

```javascript
import classes from "polythene-css-classes/icon-button"
```

The icon color is set with the CSS (text) `color` attribute of the parent element. For example:

```css
.pe-button-icon {
  color: red;
}
```

<a id="style"></a>
#### Style

Some style attributes can be set using option `style`. For example:

```jsx
<FAB icon={{ svg: { content: starsSVG } }} style={{ color: "#FFCCBC", backgroundColor: "#4E342E" }} />
```

<a id="rtl-right-to-left-support"></a>
### RTL (right-to-left) support

The direction of the Icon Button is flipped when:

* it is contained within an element that either has attribute `dir="rtl"` or has className `pe-rtl`
* has className `pe-rtl--flip`


<a id="dark-or-light-tone"></a>
### Dark or light tone

If the component - or a component's parent - has option `tone` set to "dark", the component will be rendered with light colors on dark. 

* Use `tone: "dark"` to render light on dark
* Use `tone: "light"` to locally render normally when dark tone is set


