# test-scrollsnap

This is a simple project to test scroll wheel behavior. I found a weird bug with chrome, CSS scroll snap, and certain mouse wheels (appears to be when a mouse wheel click registers a delta of more than +/-120).

[SCROLLSNAPPING](https://scrollsnap-testing.netlify.app/) - example site

Check out the docs on wheel events:

[Element: wheel event - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event)

[WheelEvent - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent)

_From MDN:_ _This is the standard wheel event interface to use._ Old versions of browsers implemented the non-standard and non-cross-browser-compatible [MouseWheelEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseWheelEvent) and [MouseScrollEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseScrollEvent) interfaces. Use this interface and avoid the non-standard ones.

Relevant issue on stack overflow - [html - Scroll snap CSS skipping elements - Stack Overflow](https://stackoverflow.com/questions/61726927/scroll-snap-css-skipping-elements)

CSS Trick on scroll snap - [Practical CSS Scroll Snapping | CSS-Tricks](https://css-tricks.com/practical-css-scroll-snapping/)

## How to run on localhost

First install dependencies:

```sh
npm install
```

To run in dev mode mode:

```sh
npm start
```

Then go to http://localhost:8080

To create a production build:

```sh
npm run build
```

## Credits

Made with [createapp.dev](https://createapp.dev/)
