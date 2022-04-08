/**

有 4 种原生集合类型定义了默认迭代器：
Array
所有定型数组
Map
Set


let iterableThings = [
 Array.of(1, 2),
 typedArr = Int16Array.of(3, 4),
 new Map([[5, 6], [7, 8]]),
 new Set([9, 10])
];
for (const iterableThing of iterableThings) {
 for (const x of iterableThing) {
 console.log(x);
 }
}
// 1
// 2
// 3
// 4
// [5, 6]
// [7, 8]
// 9
// 10 


let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3]
console.log(arr1 === arr2); // false 


let map1 = new Map([[1, 2], [3, 4]]);
let map2 = new Map(map1);
console.log(map1); // Map {1 => 2, 3 => 4}
console.log(map2); // Map {1 => 2, 3 => 4}

let arr1 = [1, 2, 3];
let arr2 = [0, ...arr1, 4, 5];
console.log(arr2); // [0, 1, 2, 3, 4, 5]


let arr1 = [{}];
let arr2 = [...arr1];
arr1[0].foo = 'bar';
console.log(arr2[0]); // { foo: 'bar' }


let arr1 = [1, 2, 3];
// 把数组复制到定型数组
let typedArr1 = Int16Array.of(...arr1);
let typedArr2 = Int16Array.from(arr1);
console.log(typedArr1); // Int16Array [1, 2, 3]
console.log(typedArr2); // Int16Array [1, 2, 3]

// 把数组复制到映射
let map = new Map(arr1.map((x) => [x, 'val' + x]));
console.log(map); // Map {1 => 'val 1', 2 => 'val 2', 3 => 'val 3'}

// 把数组复制到集合
let set = new Set(typedArr2);
console.log(set); // Set {1, 2, 3}
// 把集合复制回数组
let arr2 = [...set];
console.log(arr2); // [1, 2, 3]


*/