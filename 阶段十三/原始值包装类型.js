/**

3 种特殊的引用类型：Boolean、Number 和 String。

let s1 = "some text";
let s2 = s1.substring(2);
console.log(s2);
VM870:3 me text

(1) 创建一个 String 类型的实例；
(2) 调用实例上的特定方法；
(3) 销毁实例。

let s1 = new String("some text");
let s2 = s1.substring(2);
s1 = null;

let s1 = "some text";
s1.color = "red";
console.log(s1.color); // undefined

引用类型与原始值包装类型的主要区别在于对象的生命周期。

在通过 new 实例化引用类型后，得到的实例会在离开作用域时被销毁，而自动创建的原始值包装对象则只存在于访问它的那行代码执行期间。这意味着不能在运行时给原始值添加属性和方法。

可以显式地使用 Boolean、Number 和 String 构造函数创建原始值包装对象。

Object 构造函数作为一个工厂方法，能够根据传入值的类型返回相应原始值包装类型的实例。

let obj = new Object("some text");
console.log(obj instanceof String); // true

let value = "25";
let number = Number(value); // 转型函数
console.log(typeof number); // "number"
let obj = new Number(value); // 构造函数
console.log(typeof obj); // "object"

*/