/**
定型数组（typed array）是 ECMAScript 新增的结构，目的是提升向原生库传输数据的效率。实际上，JavaScript 并没有“TypedArray”类型，它所指的其实是一种特殊的包含数值类型的数组。

ArrayBuffer(0)
byteLength: 0
[[Prototype]]: ArrayBuffer
[[Int8Array]]: Int8Array(0)
[[Uint8Array]]: Uint8Array(0)
[[Int16Array]]: Int16Array(0)
[[Int32Array]]: Int32Array(0)
[[ArrayBufferByteLength]]: 0
[[ArrayBufferData]]: 315

Float32Array 实际上是一种“视图”，可以允许 JavaScript 运行时访问一块名为 ArrayBuffer 的预分配内存。ArrayBuffer 是所有定型数组及视图引用的基本单位。

ArrayBuffer()是一个普通的 JavaScript 构造函数，可用于在内存中分配特定数量的字节空间。

ArrayBuffer 一经创建就不能再调整大小。不过，可以使用 slice()复制其全部或部分到一个新实例中

ArrayBuffer 在分配失败时会抛出错误

声明 ArrayBuffer 则会将所有二进制位初始化为 0。

通过声明ArrayBuffer 分配的堆内存可以被当成垃圾回收，不用手动释放。

不能仅通过对 ArrayBuffer 的引用就读取或写入其内容。要读取或写入 ArrayBuffer，就必须通过视图。视图有不同的类型，但引用的都是 ArrayBuffer 中存储的二进制数据。

第一种允许你读写 ArrayBuffer 的视图是 DataView。这个视图专为文件 I/O 和网络 I/O 设计，其API 支持对缓冲数据的高度控制，但相比于其他类型的视图性能也差一些。DataView 对缓冲内容没有任何预设，也不能迭代。

必须在对已有的 ArrayBuffer 读取或写入时才能创建 DataView 实例。

const buf = new ArrayBuffer(16);
undefined
const fullDataView = new DataView(buf);
undefined
console.log(fullDataView.byteOffset); // 0
VM1064:1 0
undefined
console.log(fullDataView.byteLength); // 16
VM1212:1 16
undefined
console.log(fullDataView.buffer === buf); // true
VM1417:1 true
undefined
fullDataView
DataView(16)buffer: ArrayBuffer(16)  byteLength: 16byteOffset: 0[[Prototype]]: DataView
const secondHalfDataView = new DataView(buf, 8);
console.log(secondHalfDataView.byteOffset); // 8 
VM1440:2 8
undefined
console.log(secondHalfDataView.byteLength); // 8
console.log(secondHalfDataView.buffer === buf); // true 
VM1457:1 8
VM1457:2 true

要通过 DataView 读取缓冲

首先是要读或写的字节偏移量。可以看成 DataView 中的某种“地址”

DataView 应该使用 ElementType 来实现 JavaScript 的 Number 类型到缓冲内二进制格式的转换。

最后是内存中值的字节序。默认为大端字节序。

DataView 对存储在缓冲内的数据类型没有预设

const buf = new ArrayBuffer(2);
undefined
const view = new DataView(buf);
undefined
console.log(view.getInt8(0)); // 0
VM2091:1 0
undefined
console.log(view.getInt8(1)); // 0
VM2216:1 0
undefined
console.log(view.getInt16(0)); // 0
VM2362:1 0

“字节序”指的是计算系统维护的一种字节顺序的约定。DataView 只支持两种约定：大端字节序和小端字节序。大端字节序也称为“网络字节序”，意思是最高有效位保存在第一个字节，而最低有效位保存在最后一个字节。小端字节序正好相反，即最低有效位保存在第一个字节，最高有效位保存在最后一个字节。


DataView 完成读、写操作的前提是必须有充足的缓冲区，否则就会抛出 RangeError


const buf = new ArrayBuffer(1);
undefined
const view = new DataView(buf);
undefined
view.setInt8(0,1.5);
undefined
console.log(view.getInt8(0)); // 1
VM3108:1 1
undefined
view.setInt8(0, [4]);
undefined
console.log(view.getInt8(0)); // 4
VM3323:1 4
undefined
view.setInt8(0, 'f');
undefined
console.log(view.getInt8(0)); // 0
VM3562:1 0
undefined
view.setInt8(0, Symbol());
VM3653:1 Uncaught TypeError: Cannot convert a Symbol value to a number
    at DataView.setInt8 (<anonymous>)
    at <anonymous>:1:6


定型数组是另一种形式的 ArrayBuffer 视图。

创建定型数组的方式包括读取已有的缓冲、使用自有缓冲、填充可迭代结构，以及填充基于任意类型的定型数组。另外，通过<ElementType>.from()和<ElementType>.of()也可以创建定型数组

const buf = new ArrayBuffer(12);
undefined
const ints = new Int32Array(buf);
undefined
console.log(ints.length); // 3 每个元素需要4字节
VM4021:1 3
undefined
// 创建一个长度为 6 的 Int32Array
const ints2 = new Int32Array(6);
undefined
ints2.length;
6
ints2.buffer.byteLength
24
const ints3 = new Int32Array([2, 4, 6, 8]); 
undefined
ints3.length
4
ints3.buffer.byteLength
16
ints3[2]
6
// 通过复制 ints3 的值创建一个 Int16Array
const ints4 = new Int16Array(ints3);
undefined
ints4
Int16Array(4) [2, 4, 6, 8, buffer: ArrayBuffer(8), byteLength: 8, byteOffset: 0, length: 4, Symbol(Symbol.toStringTag): 'Int16Array']


如果定型数组没有用任何值初始化，则其关联的缓冲会以 0 填充：
const ints = new Int32Array(4);
alert(ints[0]); // 0
alert(ints[1]); // 0
alert(ints[2]); // 0
alert(ints[3]); // 0


定型数组也提供了两个新方法，可以快速向外或向内复制数据：set()和 subarray()。


// 创建长度为 8 的 int16 数组
const container = new Int16Array(8);
// 把定型数组复制为前 4 个值
// 偏移量默认为索引 0
container.set(Int8Array.of(1, 2, 3, 4));
console.log(container); // [1,2,3,4,0,0,0,0]


// 把普通数组复制为后 4 个值
// 偏移量 4 表示从索引 4 开始插入
container.set([5,6,7,8], 4);
console.log(container); // [1,2,3,4,5,6,7,8]


// 溢出会抛出错误
container.set([5,6,7,8], 7);
// RangeError

const source = Int16Array.of(2, 4, 6, 8);
// 把整个数组复制为一个同类型的新数组
const fullCopy = source.subarray();
console.log(fullCopy); // [2, 4, 6, 8]


// 从索引 2 开始复制数组
const halfCopy = source.subarray(2);
console.log(halfCopy); // [6, 8]


// 从索引 1 开始复制到索引 3
const partialCopy = source.subarray(1, 3);
console.log(partialCopy); // [4, 6]


const clampedInts = new Uint8ClampedArray([-1, 0, 255, 256]);
console.log(clampedInts); // [0, 0, 255, 255] 

// 长度为 2 的有符号整数数组
// 每个索引保存一个二补数形式的有符号整数
// 范围是-128（-1 * 2^7）~127（2^7 - 1）
const ints = new Int8Array(2);
// 长度为 2 的无符号整数数组
// 每个索引保存一个无符号整数
// 范围是 0~255（2^7 - 1）
const unsignedInts = new Uint8Array(2); 

ints[0]
0
ints[1]
0
ints[2]
undefined
unsignedInts[0]
0
unsignedInts[-1]
undefined
unsignedInts[1]
0


unsignedInts[1] = 256; 
256
unsignedInts[1] = 511;
511
unsignedInts[1]
255
unsignedInts
Uint8Array(2) [0, 255, buffer: ArrayBuffer(2), byteLength: 2, byteOffset: 0, length: 2, Symbol(Symbol.toStringTag): 'Uint8Array']
unsignedInts[1] = 0;
0
unsignedInts[1] = 300;
300
unsignedInts[1]
44

*/

/**
Map

// 使用自定义迭代器初始化映射
const m2 = new Map({
 [Symbol.iterator]: function*() {
 yield ["key1", "val1"];
 yield ["key2", "val2"];
 yield ["key3", "val3"];
 }
});
alert(m2.size); // 3


// 映射期待的键/值对，无论是否提供
const m3 = new Map([[]]);
alert(m3.has(undefined)); // true
alert(m3.get(undefined)); // undefined


const m = new Map();
const objKey = {},
 objVal = {},
 arrKey = [],
 arrVal = [];
m.set(objKey, objVal);
m.set(arrKey, arrVal);
objKey.foo = "foo";
objVal.bar = "bar";
arrKey.push("foo");
arrVal.push("bar");
console.log(m.get(objKey)); // {bar: "bar"}
console.log(m.get(arrKey)); // ["bar"]

映射实例可以提供一个迭代器（Iterator），能以插入顺序生成[key, value]形式的数组。可以通过 entries()方法（或者 Symbol.iterator 属性，它引用 entries()）取得这个迭代器


const wm = new WeakMap();
弱映射中的键只能是 Object 或者继承自 Object 的类型，尝试使用非对象设置键会抛出
TypeError。值的类型没有限制。


WeakMap 中的键/值对任何时候都可能被销毁，所以没必要提供迭代其键/值对的能力

初始化之后，可以使用 add()增加值，使用 has()查询，通过 size 取得元素数量，以及使用 delete()和 clear()删除元素


const s = new Set(["val1", "val2", "val3"]);
alert(s.values === s[Symbol.iterator]); // true
alert(s.keys === s[Symbol.iterator]); // true
for (let value of s.values()) {
 alert(value);
}
// val1
// val2
// val3
for (let value of s[Symbol.iterator]()) {
 alert(value);
}
// val1
// val2
// val3 


const ws = new WeakSet();

弱集合中的值只能是 Object 或者继承自 Object 的类型，尝试使用非对象设置值会抛出 TypeError。

初始化之后可以使用 add()再添加新值，可以使用 has()查询，还可以使用 delete()删除

ECMAScript 6 新增了一批引用类型：Map、WeakMap、Set 和 WeakSet。这些类型为组织应用程序
数据和简化内存管理提供了新能力。



*/