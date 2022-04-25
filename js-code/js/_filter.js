// 实现数组的filter方法
Array.prototype._filter = function(fn) {
 if(typeof fn !== 'function') {
  throw Error('参数必须是一个函数')
 }
 const res = []
 for(let i = 0, len = this.length; i < len; i++) {
  fn(this[i]) && res.push(this[i])
 }
 return res
}

let arr = [1,2,3,4,5];
// let newArr = arr.filter((item) => {
//  return item > 3
// })
// console.log(newArr, arr) // [ 4, 5 ] [ 1, 2, 3, 4, 5 ]

// console.log(arr._filter((item) => {
//  return item > 3
// }), arr)// [ 4, 5 ] [ 1, 2, 3, 4, 5 ]