// es5

function sumEs5() {
 let sum = 0
 Array.prototype.forEach.call(arguments, function(item) {
  sum += item * 1
 })
 return sum
}

// es6

function sumEs6(...nums) {
 let sum = 0
 nums.forEach(function(item) {
  sum += item * 1
 })
 return sum
}

// 使用es5和es6求函数参数的和