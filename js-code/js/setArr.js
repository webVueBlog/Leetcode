
const setArr = function(array) {
 return Array.from(new Set(array))
}

// const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
// console.log(setArr(array)) // [1, 2, 3, 5, 9, 8]

// es5: 使用map存储不重复的数字
function uniqueArray(array) {
 let map = {}
 let res = []
 for(let i = 0; i < array.length; i++) {
  if(!map.hasOwnProperty([array[i]])) { // 对象属性[]
   map[array[i]] = 1
   res.push(array[i])
  }
 }
 return res
}