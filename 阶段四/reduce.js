let arr1 = [1, 2, 3, 4];

var sum = arr1.reduce((prev, next, index, arr) => {
 return prev + next;
}, 100);
console.log(sum); //110

/**
 * reduce
 * 可以搞定的东西，for循环，foreach，去重，扁平化
 *
 * */

// let arr = [];
// arr.reduce(callback, [initialValue]);
// reduce为数组中的每一个元素一次执行回调函数,不包括数组中被删除的元素或者从未被赋值的元素，四个参数（初始值（或者上一次函数的回调值），当前元素值，当前索引，调用reduce的数组。

/**
 * callback （执行数组中每个值的函数，包含四个参数）
 * 1、previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
 * 2、currentValue （数组中当前被处理的元素）
 * 3、index （当前元素在数组中的索引）
 * 4、array （调用 reduce 的数组）
initialValue （作为第一次调用 callback 的第一个参数。） */
