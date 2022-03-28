// Array.prototype.flat()
// flat() 方法会按照一个可指定的深度递归遍历数组， 并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

// const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat());
// // expected output: [0, 1, 2, 3, 4]

// const arr2 = [0, 1, 2, [
//     [
//         [3, 4]
//     ]
// ]];

// console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]

// 扁平化嵌套数组

var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

//使用 Infinity，可展开任意深度的嵌套数组
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 扁平化与数组空项
// flat() 方法会移除数组中的空项:

var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]