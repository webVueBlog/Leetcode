/**

生成器的形式是一个函数，函数名称前面加一个星号（*）表示它是一个生成器。只要是可以定义
函数的地方，就可以定义生成器。

// 生成器函数声明
function* generatorFn() {} 

// 生成器函数表达式
let generatorFn = function* () {} 

// 作为对象字面量方法的生成器函数
let foo = { 
 * generatorFn() {} 
} 

// 作为类实例方法的生成器函数
class Foo { 
 * generatorFn() {} 
} 

// 作为类静态方法的生成器函数
class Bar { 
 static * generatorFn() {} 
}

注意 箭头函数不能用来定义生成器函数。

调用生成器函数会产生一个生成器对象。

生成器对象也实现了 Iterator 接口，因此具有 next()方法。


next()方法的返回值类似于迭代器，有一个 done 属性和一个 value 属性。函数体为空的生成器
函数中间不会停留，调用一次 next()就会让生成器到达 done: true 状态。

function* generatorFn() {} 
let generatorObject = generatorFn(); 
console.log(generatorObject); // generatorFn {<suspended>} 
console.log(generatorObject.next()); // { done: true, value: undefined }

value 属性是生成器函数的返回值，默认值为 undefined，可以通过生成器函数的返回值指定：

function* generatorFn() { 
 return 'foo'; 
} 
let generatorObject = generatorFn(); 
console.log(generatorObject); // generatorFn {<suspended>} 
console.log(generatorObject.next()); // { done: true, value: 'foo' }

function* generatorFn() { 
console.log('foobar'); 
} 
// 初次调用生成器函数并不会打印日志
let generatorObject = generatorFn(); 
generatorObject.next(); // foobar




生成器对象实现了 Iterable 接口，它们默认的迭代器是自引用的




*/