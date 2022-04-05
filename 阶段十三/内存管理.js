/**

将内存占用量保持在一个较小的值可以让页面性能更好。

优化内存占用的最佳手段就是保证在执行代码时只保存必要的数据。如果数据不再必要，那么把它设置为 null，从而释放其引用。

这也可以叫作解除引用

最适合全局变量和全局对象的属性。局部变量在超出作用域后会被自动解除引用


function createPerson(name){ 
 let localPerson = new Object(); 
 localPerson.name = name; 
 return localPerson; 
} 
let globalPerson = createPerson("Nicholas"); 
// 解除 globalPerson 对值的引用
globalPerson = null;


1. 通过 const 和 let 声明提升性能
2. 隐藏类和删除操作

运行期间，V8 会将创建的对象与隐藏类关联起来，以跟踪它们的属性特征。能够共享相同隐藏类的对象性能会更好，V8 会针对这种情况进行优化，但不一定总能够做到。

function Article() { 
 this.title = 'Inauguration Ceremony Features Kazoo Band'; 
} 
let a1 = new Article(); 
let a2 = new Article();

V8 会在后台配置，让这两个类实例共享相同的隐藏类，因为这两个实例共享同一个构造函数和原型。


解决方案就是避免 JavaScript 的“先创建再补充”（ready-fire-aim）式的动态属性赋值，并在构造函数中一次性声明所有属性

function Article(opt_author) { 
 this.title = 'Inauguration Ceremony Features Kazoo Band'; 
 this.author = opt_author; 
} 
let a1 = new Article(); 
let a2 = new Article('Jake');



function Article() { 
 this.title = 'Inauguration Ceremony Features Kazoo Band'; 
 this.author = 'Jake'; 
} 
let a1 = new Article(); 
let a2 = new Article(); 
a1.author = null;


3. 内存泄漏

意外声明全局变量是最常见但也最容易修复的内存泄漏问题

在 window 对象上创建的属性，只要 window 本身不被清理就不会消失。

function setName() { 
 name = 'Jake'; 
}

定时器也可能会悄悄地导致内存泄漏。

let name = 'Jake'; 
setInterval(() => { 
 console.log(name); 
}, 100);

只要定时器一直运行，回调函数中引用的 name 就会一直占用内存。


使用 JavaScript 闭包很容易在不知不觉间造成内存泄漏。

let outer = function() { 
 let name = 'Jake'; 
 return function() { 
 return name; 
 }; 
};


4. 静态分配与对象池


注意 静态分配是优化的一种极端形式。如果你的应用程序被垃圾回收严重地拖了后腿，可以利用它提升性能。但这种情况并不多见。大多数情况下，这都属于过早优化，因此不用考虑。

对象更替的速度很快，从而会更频繁地安排垃圾回收。

一个策略是使用对象池。

由于没发生对象初始化，垃圾回收探测就不会发现有对象更替，因此垃圾回收程序就不会那么频繁地运行。

// vectorPool 是已有的对象池
let v1 = vectorPool.allocate(); 
let v2 = vectorPool.allocate(); 
let v3 = vectorPool.allocate(); 
v1.x = 10; 
v1.y = 5; 
v2.x = -3; 
v2.y = -6; 
addVector(v1, v2, v3); 
console.log([v3.x, v3.y]); // [7, -1] 
vectorPool.free(v1); 
vectorPool.free(v2); 
vectorPool.free(v3); 
// 如果对象有属性引用了其他对象
// 则这里也需要把这些属性设置为 null 
v1 = null; 
v2 = null; 
v3 = null;


*/