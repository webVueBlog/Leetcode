/**

ECMAScript 有 6 种简单数据类型（也称为原始类型）：Undefined、Null、Boolean、Number、String 和 Symbol。Symbol（符号）是 ECMAScript 6 新增的。还有一种复杂数据类型叫 Object（对象）。Object 是一种无序名值对的集合。

typeof 操作符

"undefined"表示值未定义；
"boolean"表示值为布尔值；
"string"表示值为字符串；
"number"表示值为数值；
"object"表示值为对象（而不是函数）或 null；
"function"表示值为函数；
"symbol"表示值为符号。

console.log(0/0); // NaN
console.log(-0/+0); // NaN

console.log(5/0); // Infinity
console.log(5/-0); // -Infinity

有 3 个函数可以将非数值转换为数值：Number()、parseInt()和 parseFloat()。


\n 换行
\t 制表
\b 退格
\r 回车
\f 换页
\\ 反斜杠（\）
\' 单引号（'），在字符串以单引号标示时使用，例如'He said, \'hey.\''
null 和 undefined 值没有 toString()方法。


let mySymbol = Symbol();
let myWrappedSymbol = Object(mySymbol);
console.log(typeof myWrappedSymbol); // "object"

使用全局符号注册表

let fooGlobalSymbol = Symbol.for('foo');
console.log(typeof fooGlobalSymbol); // symbol 

全局注册表中的符号必须使用字符串键来创建，因此作为参数传给 Symbol.for()的任何值都会被转换为字符串。此外，注册表中使用的键同时也会被用作符号描述。

// 创建全局符号
let s = Symbol.for('foo');
console.log(Symbol.keyFor(s)); // foo
// 创建普通符号
let s2 = Symbol('bar');
console.log(Symbol.keyFor(s2)); // undefined

Object.getOwnPropertyNames()返回对象实例的常规属性数组，Object.getOwnPropertySymbols()返回对象实例的符号属性数组。这两个方法的返回值彼此互斥。Object.getOwnPropertyDescriptors()会返回同时包含常规和符号属性描述符的对象。Reflect.ownKeys()会返回两种类型
的键

let s1 = Symbol('foo'),
 s2 = Symbol('bar');
let o = {
 [s1]: 'foo val',
 [s2]: 'bar val',
 baz: 'baz val',
 qux: 'qux val'
};
console.log(Object.getOwnPropertySymbols(o));
// [Symbol(foo), Symbol(bar)]
console.log(Object.getOwnPropertyNames(o));
// ["baz", "qux"]
console.log(Object.getOwnPropertyDescriptors(o));
// {baz: {...}, qux: {...}, Symbol(foo): {...}, Symbol(bar): {...}}
console.log(Reflect.ownKeys(o));
// ["baz", "qux", Symbol(foo), Symbol(bar)] 

let o = {
 [Symbol('foo')]: 'foo val',
 [Symbol('bar')]: 'bar val'
};
console.log(o);
// {Symbol(foo): "foo val", Symbol(bar): "bar val"}
let barSymbol = Object.getOwnPropertySymbols(o)
 .find((symbol) => symbol.toString().match(/bar/));
console.log(barSymbol);
// Symbol(bar)


Object 类型


constructor：用于创建当前对象的函数。

hasOwnProperty(propertyName)：用于判断当前对象实例（不是原型）上是否存在给定的属
性。要检查的属性名必须是字符串（如 o.hasOwnProperty("name")）或符号。

isPrototypeOf(object)：用于判断当前对象是否为另一个对象的原型。

Object.prototype.isPrototypeOf(a);
true

propertyIsEnumerable(propertyName)：用于判断给定的属性是否可以使用for-in 语句枚举。与 hasOwnProperty()一样，属性名必须是字符串。

toLocaleString()：返回对象的字符串表示，该字符串反映对象所在的本地化执行环境。

toString()：返回对象的字符串表示。

valueOf()：返回对象对应的字符串、数值或布尔值表示。通常与 toString()的返回值相同。



*/