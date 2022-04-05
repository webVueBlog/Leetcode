/**

Symbol（符号）是 ECMAScript 6 新增的数据类型。符号是原始值，且符号实例是唯一、不可变的。

1. 符号的基本用法

符号需要使用 Symbol()函数初始化。

let sym = Symbol(); 
console.log(typeof sym); // symbol

调用 Symbol()函数时，也可以传入一个字符串参数作为对符号的描述（description）

let myBoolean = new Boolean(); 
console.log(typeof myBoolean); // "object" 
let myString = new String(); 
console.log(typeof myString); // "object" 
let myNumber = new Number(); 
console.log(typeof myNumber); // "object" 
let mySymbol = new Symbol(); // TypeError: Symbol is not a constructor


let mySymbol = Symbol(); 
let myWrappedSymbol = Object(mySymbol); 
console.log(typeof myWrappedSymbol); // "object"


2. 使用全局符号注册表

需要使用 Symbol.for()方法：
let fooGlobalSymbol = Symbol.for('foo'); 
console.log(typeof fooGlobalSymbol); // symbol

let fooGlobalSymbol = Symbol.for('foo'); // 创建新符号
let otherFooGlobalSymbol = Symbol.for('foo'); // 重用已有符号
console.log(fooGlobalSymbol === otherFooGlobalSymbol); // true

*/

// let genericSymbol = Symbol();
// let otherGenericSymbol = Symbol();

// let fooSymbol = Symbol('foo');
// let otherFooSymbol = Symbol('foo');

// console.log(genericSymbol == otherGenericSymbol); // false
// console.log(fooSymbol == otherFooSymbol); // false

// let genericSymbol = Symbol();
// console.log(genericSymbol); // Symbol() 

// let fooSymbol = Symbol('foo');
// console.log(fooSymbol); // Symbol(foo);

// let fooGlobalSymbol = Symbol.for('foo'); // 创建新符号
// let otherFooGlobalSymbol = Symbol.for('foo'); // 重用已有符号
// console.log(fooGlobalSymbol === otherFooGlobalSymbol); // true

// let localSymbol = Symbol('foo');
// let globalSymbol = Symbol.for('foo');
// console.log(localSymbol === globalSymbol); // false

// let fooGlobalSymbol1 = Symbol.for('foo'); // 
// let otherFooGlobalSymbol1 = Symbol.for('foo1'); // 
// console.log(fooGlobalSymbol1 === otherFooGlobalSymbol1); // false


// let emptyGlobalSymbol = Symbol.for();
// let emptyGlobalSymbol1 = Symbol.for();

// console.log(emptyGlobalSymbol); // Symbol(undefined)
// console.log(emptyGlobalSymbol === emptyGlobalSymbol1); // true

/**

Symbol.keyFor()来查询全局注册表

如果查询的不是全局符号，则返回 undefined。

// 创建全局符号
let s = Symbol.for('foo'); 
console.log(Symbol.keyFor(s)); // foo 
// 创建普通符号
let s2 = Symbol('bar'); 
console.log(Symbol.keyFor(s2)); // undefined 
如果传给 Symbol.keyFor()的不是符号，则该方法抛出 TypeError：
Symbol.keyFor(123); // TypeError: 123 is not a symbol

 */

/**

3. 使用符号作为属性

let s1 = Symbol('foo'), 
 s2 = Symbol('bar'), 
 s3 = Symbol('baz'), 
 s4 = Symbol('qux'); 
let o = { 
 [s1]: 'foo val' 
}; 
// 这样也可以：o[s1] = 'foo val'; 
console.log(o); 
// {Symbol(foo): foo val} 
Object.defineProperty(o, s2, {value: 'bar val'}); 
console.log(o); 
// {Symbol(foo): foo val, Symbol(bar): bar val} 
Object.defineProperties(o, { 
 [s3]: {value: 'baz val'}, 
 [s4]: {value: 'qux val'} 
}); 
console.log(o); 
// {Symbol(foo): foo val, Symbol(bar): bar val, 
// Symbol(baz): baz val, Symbol(qux): qux val}

*/

// Reflect.ownKeys() 会返回两种类型的键：

/**

1. Object.getOwnPropertyNames() 返回对象实例的常规属性数组
2. Object.getOwnPropertySymbols() 返回对象实例的符号属性数组
3. Object.getOwnPropertyDescriptors() 返回同时包含常规和符号属性描述符的对象

Reflect.ownKeys()

*/

/**

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

*/

/**

4. 常用内置符号

前缀为@@。比如， @@iterator 指的就是 Symbol.iterator。

for-of 循环会在相关对象上使用 Symbol.iterator 属性

所有内置符号属性都是不可写、不可枚举、不可配置的。

*/

/**

5. Symbol.asyncIterator

根据 ECMAScript 规范，这个符号作为一个属性表示“一个方法，该方法返回对象默认的 AsyncIterator。 
由 for-await-of 语句使用”。换句话说，这个符号表示实现异步迭代器 API 的函数。

这个符号表示实现异步迭代器 API 的函数。

for-await-of 循环会利用这个函数执行异步迭代操作。

class Foo { 
 async *[Symbol.asyncIterator]() {} 
} 
let f = new Foo(); 
console.log(f[Symbol.asyncIterator]()); 
// AsyncGenerator {<suspended>}

*/

// console.log('1')

// class Foo {
//     async * [Symbol.asyncIterator]() {}
// }
// let f = new Foo();
// console.log(f[Symbol.asyncIterator]());
// AsyncGenerator {<suspended>}

// Object [AsyncGenerator] {}

console.log('2')


// async function asyncCount() {
//     let emitter = new Emitter(5);

//     for await (const x of emitter) {
//         console.log(x);
//     }
// }

// class Emitter {
//     constructor(max) {
//         this.max = max;
//         this.asyncIdx = 0;
//     }

//     async * [Symbol.asyncIterator]() {
//         while (this.asyncIdx < this.max) {
//             yield new Promise((resolve) => resolve(this.asyncIdx++));
//         }
//     }
// }

// asyncCount();

/**

6. Symbol.hasInstance

根据 ECMAScript 规范，这个符号作为一个属性表示“一个方法，该方法决定 一个构造器对象是否认可一个对象是它的实例。

在 ES6 中，instanceof 操作符会使用 Symbol.hasInstance 函数来确定关系。

*/

// function Foo() {}
// let f = new Foo();
// console.log(f instanceof Foo); // true 

// class Bar {}
// let b = new Bar();
// console.log(b instanceof Bar); // true


/**

在 ES6 中，instanceof 操作符会使用 Symbol.hasInstance 函数来确定关系。

这个属性定义在 Function 的原型上

class Bar {} 
class Baz extends Bar { 
static [Symbol.hasInstance]() { 
return false; 
} 
} 
let b = new Baz(); 
console.log(Bar[Symbol.hasInstance](b)); // true 
console.log(b instanceof Bar); // true 
console.log(Baz[Symbol.hasInstance](b)); // false 
console.log(b instanceof Baz); // false

*/

// function Foo() {}
// let f = new Foo();
// console.log(Foo[Symbol.hasInstance](f)); // true

// class Bar {}
// let b = new Bar();
// console.log(Bar[Symbol.hasInstance][b]); // true

/**

7. Symbol.isConcatSpreadable

Array.prototype.concat()打平其数组元素

let initial = ['foo']; 
let array = ['bar']; 
console.log(array[Symbol.isConcatSpreadable]); // undefined 
console.log(initial.concat(array)); // ['foo', 'bar'] 
array[Symbol.isConcatSpreadable] = false; 
console.log(initial.concat(array)); // ['foo', Array(1)]

let arrayLikeObject = { length: 1, 0: 'baz' }; 
console.log(arrayLikeObject[Symbol.isConcatSpreadable]); // undefined 
console.log(initial.concat(arrayLikeObject)); // ['foo', {...}] 
arrayLikeObject[Symbol.isConcatSpreadable] = true; 
console.log(initial.concat(arrayLikeObject)); // ['foo', 'baz']

let otherObject = new Set().add('qux'); 
console.log(otherObject[Symbol.isConcatSpreadable]); // undefined 
console.log(initial.concat(otherObject)); // ['foo', Set(1)] 
otherObject[Symbol.isConcatSpreadable] = true; 
console.log(initial.concat(otherObject)); // ['foo']
*/

/**

8. Symbol.iterator

一个方法，该方法返回对象默认的迭代器。

class Foo { 
 *[Symbol.iterator]() {} 
} 
let f = new Foo(); 
console.log(f[Symbol.iterator]()); 
// Generator {<suspended>}


class Emitter { 
 constructor(max) { 
 this.max = max; 
 this.idx = 0; 
 } 
*[Symbol.iterator]() { 
 while(this.idx < this.max) { 
 yield this.idx++; 
 } 
 } 
} 
function count() { 
 let emitter = new Emitter(5); 
 for (const x of emitter) { 
 console.log(x); 
 } 
} 
count(); 
// 0
// 1 
// 2 
// 3 
// 4
*/

/**

9. Symbol.match

这个符号作为一个属性表示“一个正则表达式方法，该方法用正则表达式去匹配字符串。由 String.prototype.match()方法使用”

console.log(RegExp.prototype[Symbol.match]); 
// ƒ [Symbol.match]() { [native code] } 

console.log('foobar'.match(/bar/)); 
// ["bar", index: 3, input: "foobar", groups: undefined]



class FooMatcher { 
static [Symbol.match](target) { 
return target.includes('foo'); 
} 
} 
console.log('foobar'.match(FooMatcher)); // true 
console.log('barbaz'.match(FooMatcher)); // false 
class StringMatcher { 
 constructor(str) { 
 this.str = str; 
 } 
[Symbol.match](target) { 
return target.includes(this.str); 
} 
} 
console.log('foobar'.match(new StringMatcher('foo'))); // true 
console.log('barbaz'.match(new StringMatcher('qux'))); // false

*/

/**

10. Symbol.replace

这个符号作为一个属性表示“一个正则表达式方法，该方法替换一个字符串中匹配的子串。由 String.prototype.replace()方法使用”。

String.prototype.replace() 方法会使用以 Symbol.replace 为键的函数来对正则表达式求值。

console.log(RegExp.prototype[Symbol.replace]); 
// ƒ [Symbol.replace]() { [native code] } 
console.log('foobarbaz'.replace(/bar/, 'qux')); 
// 'fooquxbaz'

*/

console.log(RegExp.prototype[Symbol.replace]);
// ƒ [Symbol.replace]() { [native code] } 
console.log('foobarbazbar'.replace(/bar/, 'qux'));
// 'fooquxbazbar'

/**

class FooReplacer { 
static [Symbol.replace](target, replacement) { 
return target.split('foo').join(replacement); 
} 
} 
console.log('barfoobaz'.replace(FooReplacer, 'qux')); 
// "barquxbaz" 
class StringReplacer { 
 constructor(str) { 
 this.str = str; 
 } 
[Symbol.replace](target, replacement) { 
return target.split(this.str).join(replacement); 
} 
} 
console.log('barfoobaz'.replace(new StringReplacer('foo'), 'qux')); 
// "barquxbaz"


*/


/**

11. Symbol.search

这个符号作为一个属性表示“一个正则表达式方法，该方法返回字符串中匹配正则表达式的索引。由 String.prototype.search()方法使用”

console.log(RegExp.prototype[Symbol.search]); 
// ƒ [Symbol.search]() { [native code] } 
console.log('foobar'.search(/bar/)); 
// 3

*/

/**

class FooSearcher { 
 static [Symbol.search](target) { 
  return target.indexOf('foo'); 
 } 
}


console.log('foobar'.search(FooSearcher)); // 0 
console.log('barfoo'.search(FooSearcher)); // 3 
console.log('barbaz'.search(FooSearcher)); // -1 
class StringSearcher { 
 constructor(str) { 
 this.str = str; 
 } 
[Symbol.search](target) { 
return target.indexOf(this.str); 
} 
} 
console.log('foobar'.search(new StringSearcher('foo'))); // 0 
console.log('barfoo'.search(new StringSearcher('foo'))); // 3 
console.log('barbaz'.search(new StringSearcher('qux'))); // -1
*/

/**

12. Symbol.species

这个符号作为一个属性表示“一个函数值，该函数作为创建派生对象的构造函数”。

class Bar extends Array {} 
class Baz extends Array { 
static get [Symbol.species]() { 
return Array; 
} 
} 
let bar = new Bar(); 
console.log(bar instanceof Array); // true 
console.log(bar instanceof Bar); // true 
bar = bar.concat('bar'); 
console.log(bar instanceof Array); // true 
console.log(bar instanceof Bar); // true 
let baz = new Baz(); 
console.log(baz instanceof Array); // true 
console.log(baz instanceof Baz); // true 
baz = baz.concat('baz'); 
console.log(baz instanceof Array); // true 
console.log(baz instanceof Baz); // false
*/



/**

13. Symbol.split

这个符号作为一个属性表示“一个正则表达式方法，该方法在匹配正则表达式的索引位置拆分字符串。由 String.prototype.split()方法使用”。

console.log(RegExp.prototype[Symbol.split]); 
// ƒ [Symbol.split]() { [native code] } 
console.log('foobarbaz'.split(/bar/)); 
// ['foo', 'baz']

*/

/**

class FooSplitter { 
static [Symbol.split](target) { 
return target.split('foo'); 
} 
} 
console.log('barfoobaz'.split(FooSplitter)); 
// ["bar", "baz"] 
class StringSplitter { 
 constructor(str) { 
 this.str = str; 
 } 
[Symbol.split](target) { 
return target.split(this.str); 
 } 
} 
console.log('barfoobaz'.split(new StringSplitter('foo'))); 
// ["bar", "baz"]

*/

/**

14. Symbol.toPrimitive

这个符号作为一个属性表示“一个方法，该方法将对象转换为相应的原始值。由 ToPrimitive 抽象操作使用”。

这个符号作为一个属性表示“一个方法，该方法将对象转换为相应的原始值。由 ToPrimitive 抽象操作使用”。

根据提供给这个函数的参数（string、number 或 default），可以控制返回的原始值：

class Foo {} 
let foo = new Foo(); 
console.log(3 + foo); // "3[object Object]" 
console.log(3 - foo); // NaN 
console.log(String(foo)); // "[object Object]" 
class Bar { 
 constructor() { 
this[Symbol.toPrimitive] = function(hint) { 
switch (hint) { 
case 'number': 
return 3; 
case 'string': 
return 'string bar'; 
case 'default': 
default: 
return 'default bar'; 
} 
} 
 } 
}

let bar = new Bar(); 
console.log(3 + bar); // "3default bar" 
console.log(3 - bar); // 0 
console.log(String(bar)); // "string bar"
*/

/**

15. Symbol.toStringTag

这个符号作为一个属性表示“一个字符串，该字符串用于创建对象的默认字符串描述。由内置方法 Object.prototype.toString()使用”。

通过 toString()方法获取对象标识时，会检索由 Symbol.toStringTag 指定的实例标识符，默认为"Object"。

let s = new Set(); 
console.log(s); // Set(0) {} 
console.log(s.toString()); // [object Set] 
console.log(s[Symbol.toStringTag]); // Set

class Foo {} 
let foo = new Foo(); 
console.log(foo); // Foo {} 
console.log(foo.toString()); // [object Object] 
console.log(foo[Symbol.toStringTag]); // undefined

class Bar { 
 constructor() { 
this[Symbol.toStringTag] = 'Bar'; 
 } 
} 
let bar = new Bar(); 
console.log(bar); // Bar {} 
console.log(bar.toString()); // [object Bar] 
console.log(bar[Symbol.toStringTag]); // Bar

*/

/**

16. Symbol.unscopables

这个符号作为一个属性表示“一个对象，该对象所有的以及继承的属性，都会从关联对象的 with 环境绑定中排除”。

设置这个符号并让其映射对应属性的键值为 true，就可以阻止该属性出现在 with 环境绑定中
*/

let o = { foo: 'bar' };
with(o) {
    console.log(foo); // bar 
}

// o[Symbol.unscopables] = {
//     foo: true
// };
// with(o) {
//     console.log(foo); // ReferenceError 
// }

/**

注意 不推荐使用 with，因此也不推荐使用 Symbol.unscopables。

*/