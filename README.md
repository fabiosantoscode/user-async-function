# user-async-function

[![Build Status](https://travis-ci.org/fabiosantoscode/user-async-function.svg?branch=master)](https://travis-ci.org/fabiosantoscode/user-async-function)

This module exports a function that calls a user function and waits for its completion. This function can be a callback-calling function, an async/await function, or a promise-returning function.

## How to use

```javascript
const userAsyncFunction = require('user-async-function')

// somewhere in your code...
userAsyncFunction(userOptions.someAsyncFunction).then(...)

// or in an async function
await userAsyncFunction(userOptions.someAsyncFunction)
```
