let arr = [1, 2, 2, 32, 23, 122, 45];
console.log(arr);
// [
//  1, 2, 2, 32,
//  23, 122, 45
// ]
console.log(new Set(arr));
// Set(6) { 1, 2, 32, 23, 122, 45 }


let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(3);
console.log(set); // Set(3) { 1, 2, 3 }

let sets1 = new Set('da');
console.log(sets1); // Set(2) { 'd', 'a' } 字符串 转成数组
console.log(sets1.has('d')); // 判断一个元素是否在数组里面true // true
console.log(sets1.has('b')); // false
console.log(sets1.size); // 2
