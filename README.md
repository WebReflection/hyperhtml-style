# hyperStyle

[![Build Status](https://travis-ci.com/WebReflection/hyperstyle.svg?branch=master)](https://travis-ci.com/WebReflection/hyperstyle) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/hyperstyle/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/hyperstyle?branch=master) ![WebReflection status](https://offline.report/status/webreflection.svg)

The [hyperHTML](https://github.com/WebReflection/hyperHTML#hyperhtml)'s html/svg style updater.

  * CDN as global utility, via https://unpkg.com/hyperstyle
  * ESM via `import hyperStyle from 'hyperstyle'`
  * CJS via `const hyperStyle = require('hyperstyle')`

[Live test](https://webreflection.github.io/hyperstyle/test/)

### Example

The tagger accepts a node and returns a function that can be used to update the node style either via an object or a string.

```js
var bodyStyle = hyperStyle(document.body);
bodyStyle({
  fontFamily: 'sans-serif',
  fontSize: 16,
  '--cssProperty': 'value'
});

console.log(document.body.style.cssText);
// font-family: sans-serif;
// font-size: 16px;
// --cssProperty:value;
```
