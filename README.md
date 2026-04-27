# jQuery Back To Top Button Script

A lightweight jQuery script that adds a smooth "back to top" button to any page. The button fades in after the user scrolls down and animates back to the top on click.

View a working CodePen example [here](https://codepen.io/imaginedesigndevelop/pen/aNPOGQ).

## Requirements

- jQuery (any modern version)

## Usage

1. Include jQuery on your page
2. Add the script: `<script src="scrollToTop.js"></script>`
3. Customize the scroll threshold, animation speed, and button styles as needed

## Customization

| Option | Location in script | Default |
|---|---|---|
| Show button after (px) | `showAt` variable | `50` |
| Scroll animation speed (ms) | `.animate()` duration | `800` |
| Button position / styles | `$('#top').css({...})` | Fixed, bottom-right |
