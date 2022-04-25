// 实现数组的push方法

Array.prototype.myPush = function() {
 for(let i = 0; i < arguments.length; i++) {
  this[this.length] = arguments[i];
 }
 return this.length;
}

let arr = [1,2]
console.log(arr.myPush(3), arr) // 3 [1,2,3]