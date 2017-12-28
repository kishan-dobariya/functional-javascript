 function repeat(operation, num) {
      if (num <= 0) return
      operation()
      return repeat(operation, --num)
    }
//function operation() {
	// body...
//}
//repeat(operation,10);
 module.exports = repeat