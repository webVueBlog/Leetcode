// 实现数组的map方法

Array.prototype._map = function(fn) {
 if(typeof fn !== 'function') {
  throw Error('参数必须是一个函数')
 }
 const res = []
 for(let i = 0, len = this.length; i < len; i++) {
  res.push(fn(this[i]))
 }
 return res
}

// let arr = [1,2,3,4,5];
// let newArr = arr.map((item) => {
//  return item * 3
// })
// console.log(newArr, arr) // [ 3, 6, 9, 12, 15 ] [ 1, 2, 3, 4, 5 ]

// console.log(arr._map((item) => {
//  return item * 3
// }), arr)// [ 3, 6, 9, 12, 15 ] [ 1, 2, 3, 4, 5 ]