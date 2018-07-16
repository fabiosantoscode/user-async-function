'use strict'

var es6Promise = require('es6-promise')
var test = require('tape')

var uaf = require('..')

if (!global.Promise) {
  // polyfill for old node
  global.Promise = es6Promise.Promise
}

test('can take callback-calling functions', function (t) {
  t.plan(3)
  return uaf(function (arg1, arg2, cb) {
    t.equal(arg1, 'foo')
    t.equal(arg2, 'bar')
    setTimeout(function () {
      cb(null, 'return-value')
    })
  }, 'foo', 'bar').then(function (value) {
    t.equal(value, 'return-value')
  })
})
test('can take promise-returning functions', function (t) {
  t.plan(1)
  return uaf(function () {
    return Promise.resolve('foo')
  }).then(function (value) {
    t.equal(value, 'foo')
  })
})
var e = new Error
test('handles callback errors', function (t) {
  t.plan(1)
  return uaf(function (cb) {
    cb(e)
  }).catch(function (error) {
    t.equal(error, e)
  })
})
test('handles promise errors', function (t) {
  t.plan(1)
  return uaf(function () {
    return Promise.reject(e)
  }).catch(function (error) {
    t.equal(error, e)
  })
})
