function Spy(target, method) {
  var originalFunction = target[method]
  var result = {
    count: 0
  }
  target[method] = function() {
    result.count++ // track function was called
    return originalFunction.apply(this, arguments) // invoke original function
  }
  return result
}

module.exports = Spy