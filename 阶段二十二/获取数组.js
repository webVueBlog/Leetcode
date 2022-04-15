/**

Math.max.apply(Array,[25,62,91,78,34,62]) //  91
Math.min.apply(Array,[27,64,90,78,34,62]) // 27

// 利用 reduce 冒泡排序
const getMax =  arr =>  arr.reduce((acc, val) => acc = acc < val ? val : acc)
getMax([25, 62, 91, 78, 34, 62]) // 91

let arr = [1,2,3,4] 
Math.max(...arr)
Math.min(...arr)

*/