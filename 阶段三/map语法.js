/**
 * 1. 类似于对象，也是键值对的集合
 * 2. 键的范围不限于字符串
 * 3. 各种类型的值（包含对象）都可以当作键
 * 4. Object 结构提供了”字符串-串“的对应，Map结构提供了”值-值“的对应
 * 是一种更完善的 Hash 结构实现。
 */

const m = new Map();
const o = { p: 'da' };
m.set(o, 'content');
const a = m.get(o);
console.log(a); // content 把对象当作对象的key

m.has(o); // true
m.delete(o); // true
m.has(o); // false

//作为构造函数，Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。
const map = new Map([
 ['name', '张三'],
 ['title', 'Author']
]);

map.size // 2
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"

