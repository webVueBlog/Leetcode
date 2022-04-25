// 实现数组的flat方法
function _flat(arr, depth) {
 if(!Array.isArray(arr) || depth <= 0) {
  return arr
 }
 return arr.reduce((prev, cur) => {
  if(Array.isArray(cur)) {
   return prev.concat(_flat(cur, depth-1))
  }else{
   return prev.concat(cur)
  }
 },[]);
}

// let arr = [1, [2, [3, 4]]];
// console.log(_flat(arr, 3))

// Debugger attached.
// [ 1, 2, 3, 4 ]
// Waiting for the debugger to disconnect...