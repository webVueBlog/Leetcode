// 封闭对象的api属性（不能往对象里面添加属性，不能删除，不能修改）seal writable可单向修改为false，但不可以由false改为true

const user = {
 name: 'dada',
 age: 1
};

console.log(Object.getOwnPropertyDescriptors(user));

/**
 * {
 *  name: {
 *   value: 'dada',
 *   writable: true,
 *   enumerable: true,
 *   configurable: true
 *  },
 *  age: { value: 1, writable: true, enumerable: true, configurable: true }
 * }
 */

// 封闭对象
Object.seal(user);
delete user.name; // 无效
user.da = 'da'; // 无效

console.log(Object.isSealed(user)); // 查看 是否 处于封闭状态
console.log(user);
/**
 * true
{ name: 'dada', age: 1 }
 */

// 冻结对象的api  （freeze） 属性不能被修改 不能被删除 不允许遍历 不允许定义对象特征（writable等） seal上再加上writable:false

// 函数Object.seal()中也许还可以修改属性值以及修改属性的特性writable(true-->false)， 但是在Object.freeze()中，这些都干不了。
const user1 = {
 name: 'ddd',
 age: 1
}
Object.freeze(user1);

user1.name = 'li';
console.log(user1);
console.log(Object.isFrozen(user1))

/**
 * { name: 'ddd', age: 1 }
true
 */