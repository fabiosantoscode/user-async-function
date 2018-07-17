'use strict'

module.exports = function(userFunction) {
  var args = [].slice.call(arguments, 1)
  return new Promise(function (resolve, reject) {
    var nodeCb = function (err, data) {
      if (err) return reject(err)
      resolve(data)
    }
    var ret = userFunction.apply(null, args.concat(nodeCb))
    if (ret && ret.then) {
      ret.then(resolve, reject)
    } else if (ret !== undefined) {
      resolve(ret)
    }
  })
}
