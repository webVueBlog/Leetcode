// let a = 1;
// let b = 2;
// let c = 3;
let [a, b, c] = [1, 2, 3];
console.log([a, b, c]) // [ 1, 2, 3 ]
console.log(a) // 1

// ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构

// 属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。
// 如果解构不成功，变量的值就等于undefined

let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo, bar, baz) // 1 2 3
console.log([foo, [[bar], baz]]) // [ 1, [ [ 2 ], 3 ] ]

// let [x, y] = [1, 2, 3];
// x; // 1
// y; // 2

// let [a, [b], d] = [1, [2, 3], 4];
// a; // 1
// b; // 2
// d; // 4

//解构赋值允许指定默认值。

// let [foo = true] = [];
// foo; // true

// let [x, y = 'b'] = ['a']; // x='a', y='b'
// let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'

//用法
/** 1.交换变量的值 */
// let x = 1;
// let y = 2;
// [x, y] = [y, x];

/**2.从函数中返回多个值 */
// function example() {
//  return [1, 2, 3];
// }
// let [a, b, c] = example();

// function exampleObj() {
//  return {
//   foo: 1,
//   bar: 2,
//  };
// }

// let { foo, bar } = exampleObj();

/**3.函数参数的定义 */
function f({ y, b, z }) {
 console.log(y, b, z)
 return y, b, z;
}
f({ z: 3, b: 2, y: 1 });

/**4.提取json数据 */
let Json = {
 id: 42,
 name: 'sss',
};
let { id, name } = Json;
console.log(id, name) // 42 sss

/** 5.给参数设定默认值 */


/** 6.遍历map结构
 * 任何部署了 Iterator 接口的对象，都可以用for...of循环遍历，
 * Map的原生接口支持 Iterator 接口，配合变量解构赋值，获取键名和键值就非常方便
 */
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
 console.log(key + ' is ' + value);
}
// first is hello
// second is world

/** 7.输入模块的指定方法 */
const { SourceMapConsumer, SourceNode } = require('source-map');

