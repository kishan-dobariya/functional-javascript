var slice = Array.prototype.slice
module.exports = function(namespace) {
      // SOLUTION GOES HERE
      return console.log.bind(console, slice.apply(arguments), [namespace])
    }