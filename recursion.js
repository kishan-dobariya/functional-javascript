function reduce(arr, fn, initial) {
      // SOLUTION GOES HERE
      return fn(previousValue, currentValue, idex, arr){
      	if(idex===arr.length-1)
      		return; 
      	else
      		return fn(previousValue, currentValue, ++idex, arr);
      }
     
    }
    module.exports = reduce