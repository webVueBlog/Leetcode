/**

let o = new Object();

let o = new Object; // 合法，但不推荐

每个 Object 实例都有如下属性和方法。

constructor ：用于创建当前对象的函数。这个属性的值就是 Object() 函数。

hasOwnProperty(propertyName)：用于判断当前对象实例（不是原型）上是否存在给定的属性。

isPrototypeOf(object)：用于判断当前对象是否为另一个对象的原型。

propertyIsEnumerable(propertyName)：用于判断给定的属性是否可以使用

toLocaleString()：返回对象的字符串表示，该字符串反映对象所在的本地化执行环境。

toString()：返回对象的字符串表示。

valueOf()：返回对象对应的字符串、数值或布尔值表示。通常与 toString()的返回值相同。

*/

console.log(typeof('1')) // string

function Da() {}
Da.prototype.nameString = 'name'
let d = new Da();
d.age = 1;
console.log(d.hasOwnProperty('nameString')) // false
console.log(d.hasOwnProperty('age')) // true
console.dir(d.constructor === Da()) // false
console.dir(d.constructor == Da()) // false
console.dir(Da.prototype.isPrototypeOf(d)) // true
console.dir(d.propertyIsEnumerable('nameString')) // false
console.dir(d.propertyIsEnumerable('age')) // true