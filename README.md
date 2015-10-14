lowerdash - ES6
======

My mixins for Lodash, formerly known as hidash.

### Now available as ES6 style module and use lodash as `peerDependency`

## Lowerdash provides the following methods:

### Function

* straitjacket (fn Function, Mixed defaultValue)

  Returns a new function that tries to invoke passed `fn` and return `defaultValue` otherwise.

### Array

* closest
* arry (any Mixed)

  Returns an array from `any` array-like. If passed `any` is not array-like,
  returns a new array containing the `any` element
* insertAt
* gluten
* penultimate
* replaceAt


### Object

* keyOf
* norris


### Array & Object

Painless async series without promise.

* eachAsync
* eachDelayed
* eachParallel


### Deeper

Set/get/erase Object properties from path

* getFromPath
* setFromPath
* eraseFromPath



## Usage

### Node environment
```
npm install lowerdash
```

Then in your scripts:
```javascript
// require lowerdash
var _ = require('lowerdash');

// or require lowerdashed lodash
var _ = require('lodash');
```


### Browser environment
```
bower install lowerdash
```

Then include these files into your documents
```html
<script src="bower_components/lowerdash/dist/lowerdash.js"></script>
<script src="bower_components/lodash/dist/lodash.js"></script>
```
