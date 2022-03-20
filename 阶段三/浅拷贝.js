// 1.如果是数组，我们可以利用数组的一些方法比如：slice、concat 返回一个新数组的特性来实现拷贝。

let hd = { name: 'dada', age: 12, likes: [{ id: 1, name: 'li' }] };

let obj = { ...hd };

obj.likes[0].name = 'lina';

obj.name = 'abc'

console.log(hd);
console.log(obj);
// { name: 'dada', age: 12, likes: [{ id: 1, name: 'lina' }] }
// { name: 'abc', age: 12, likes: [{ id: 1, name: 'lina' }] }

var arr = ['old', 1, true, null, undefined];

var new_arr = arr.concat();

new_arr[0] = 'new'

console.log(arr)

console.log(new_arr)

// ['old', 1, true, null, undefined]
// ['new', 1, true, null, undefined]