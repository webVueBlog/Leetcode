/**
 * 1.解构赋值
 * 对于数组和Set结构进行解构赋值时，会调用
 */

let set = new Set().add(1).add(2).add(3);

let [x, y] = set;
console.log(x, y); //1,2

let [a, ...rest] = set;
console.log([a, ...rest]);//[1, 2, 3];

/**
 * 2.扩展运算符 ...
 */
let str = 'hello'
console.log([...str]); //['h','e','l','l','o']

/**
 * 3.yield 后面跟着一个可遍历的结构，他会调用该结构的遍历器接口
 */

function* Generator() {
 yield 1
 yield* [2, 3, 3]
 yield 4
}
let it = Generator()
console.log(it.next()); //{value: 1, done: false}
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

/**
 * 其他场合
 * for...of...
 * Array.from()
 * Map(),Set(),WeakMap(),WeakSet()
 * Promise.all()
 * Promise.race()
 */