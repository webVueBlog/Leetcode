// let arr = [1, [2, [3, 4, 5]]];

// function flatten(arr) {
//  let result = [];
//  for(let i = 0; i < arr.length; i++) {
//   if(Array.isArray(arr[i])) {
//    // flatten(arr[i])
//    result = result.concat(flatten(arr[i]))
//   } else {
//    result.push(arr[i])
//   }
//  }
//  return result;
// }

// function flattenReduce(arr) {
//  return arr.reduce(function(prev, next){
//   return prev.concat( Array.isArray(next) ? flatten(next) : next)
//  }, [])
// }

/**
flat 方法的语法：arr.flat([depth])

 */

function flatten(arr) {
 return arr.flat(Infinity);
}