var slice = Array.prototype.slice

function logger(namespace) {
  return function() {
    console.log.apply(console, [namespace].concat(slice.call(arguments)))
  	//console.log(Function.prototype.call(arguments));
  }
}
module.exports = logger