# user-async-function

[![Build Status](https://travis-ci.org/fabiosantoscode/user-async-function.svg?branch=master)](https://travis-ci.org/fabiosantoscode/user-async-function) [![Coverage Status](https://coveralls.io/repos/github/fabiosantoscode/user-async-function/badge.svg?branch=master)](https://coveralls.io/github/fabiosantoscode/user-async-function?branch=master)

This module exports a function that calls a user function and waits for its completion. This function can be a callback-calling function, an async/await function, or a promise-returning function.

## How to use

```javascript
const userAsyncFunction = require('user-async-function')

// somewhere in your code...
function someFunction(userOptions) {
  userAsyncFunction(userOptions.someAsyncFunction).then(...)
}

// or in an async function
async function someFunction(userOptions) {
  await userAsyncFunction(userOptions.someAsyncFunction)
}

// Pass extra arguments at will
// They will be passed to the user function (before the callback)
userAsyncFunction(fn, 'arg1', 'arg2'/*, ...*/)
```
