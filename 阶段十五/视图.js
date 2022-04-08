/**

二补数形式

补码（英语：2's complement）是一种用二进制表示有符号数的方法，也是一种将数字的正负号变号的方式，常在计算机科学中使用。补码以有符号比特的二进制数定义。

正数和0的补码就是该数字本身再补上最高比特0。负数的补码则是将其对应正数按位取反再加1。

补码系统的最大优点是可以在加法或减法处理中，不需因为数字的正负而使用不同的计算方式。只要一种加法电路就可以处理各种有号数加法，而且减法可以用一个数加上另一个数的补码来表示，因此只要有加法电路及补码电路即可完成各种有号数加法及减法，在电路设计上相当方便。

另外，补码系统的0就只有一个表示方式，这和反码系统不同（在反码系统中，0有二种表示方式），因此在判断数字是否为0时，只要比较一次即可。

右侧的表是一些8-bit补码系统的整数。它的可表示的范围包括-128到127，总共256（=28）个整数。

符号	
0	1	1	1	1	1	1	1	=	127
0	0	0	0	0	0	1	0	=	2
0	0	0	0	0	0	0	1	=	1
0	0	0	0	0	0	0	0	=	0
1	1	1	1	1	1	1	1	=	−1
1	1	1	1	1	1	1	0	=	−2
1	0	0	0	0	0	0	1	=	−127
1	0	0	0	0	0	0	0	=	−128

定型数组是另一种形式的 ArrayBuffer 视图

它特定于一种 ElementType 且遵循系统原生的字节序

定型数组提供了适用面更广的API 和更高的性能。设计定型数组的目的就是提高与 WebGL 等原生库交换二进制数据的效率。



创建定型数组的方式包括读取已有的缓冲、使用自有缓冲、填充可迭代结构，以及填充基于任意类型的定型数组。

通过<ElementType>.from()和<ElementType>.of()也可以创建定型数组


// 创建一个 12 字节的缓冲
const buf = new ArrayBuffer(12);
// 创建一个引用该缓冲的 Int32Array
const ints = new Int32Array(buf);
// 这个定型数组知道自己的每个元素需要 4 字节
// 因此长度为 3
alert(ints.length); // 3


// 创建一个长度为 6 的 Int32Array
const ints2 = new Int32Array(6);
// 每个数值使用 4 字节，因此 ArrayBuffer 是 24 字节
alert(ints2.length); // 6
// 类似 DataView，定型数组也有一个指向关联缓冲的引用
alert(ints2.buffer.byteLength); // 24 


// 创建一个包含[2, 4, 6, 8]的 Int32Array
const ints3 = new Int32Array([2, 4, 6, 8]);
alert(ints3.length); // 4
// 每个数值使用 4 字节
alert(ints3.buffer.byteLength); // 16
alert(ints3[2]); // 6


// 通过复制 ints3 的值创建一个 Int16Array
const ints4 = new Int16Array(ints3);
// 这个新类型数组会分配自己的缓冲
// 对应索引的每个值会相应地转换为新格式
alert(ints4.length); // 4
// 每个数值使用 2 字节
alert(ints4.buffer.byteLength); // 8
alert(ints4[2]); // 6 


// 基于普通数组来创建一个 Int16Array
const ints5 = Int16Array.from([3, 5, 7, 9]);
alert(ints5.length); // 4
// 每个数值使用 2 字节
alert(ints5.buffer.byteLength); // 8
alert(ints5[2]); // 7


// 基于传入的参数创建一个 Float32Array
const floats = Float32Array.of(3.14, 2.718, 1.618);
alert(floats.length); // 3
// 每个数值使用 4 字节
alert(floats.buffer.byteLength); // 12
alert(floats[2]); // 1.6180000305175781

定型数组的构造函数和实例都有一个 BYTES_PER_ELEMENT 属性，返回该类型数组中每个元素的大小：

// bytes_per_element

alert(Int16Array.BYTES_PER_ELEMENT); // 2
alert(Int32Array.BYTES_PER_ELEMENT); // 4

const ints = new Int32Array(1),
 floats = new Float64Array(1);
 
alert(ints.BYTES_PER_ELEMENT); // 4
alert(floats.BYTES_PER_ELEMENT); // 8

如果定型数组没有用任何值初始化，则其关联的缓冲会以 0 填充：

const ints = new Int32Array(4);
alert(ints[0]); // 0
alert(ints[1]); // 0
alert(ints[2]); // 0
alert(ints[3]); // 0

*/

/**

const buf = new ArrayBuffer(12);
undefined
const ints = new Int32Array(buf);
undefined
buf
ArrayBuffer(12)byteLength: 12[[Prototype]]: ArrayBuffer[[Int8Array]]: Int8Array(12)[[Uint8Array]]: Uint8Array(12)[[Int16Array]]: Int16Array(6)[[Int32Array]]: Int32Array(3)[[ArrayBufferByteLength]]: 12[[ArrayBufferData]]: 1413
ints
Int32Array(3) [0, 0, 0, buffer: ArrayBuffer(12), byteLength: 12, byteOffset: 0, length: 3, Symbol(Symbol.toStringTag): 'Int32Array']0: 01: 02: 0buffer: ArrayBuffer(12)  byteLength: 12[[Prototype]]: ArrayBuffer[[Int8Array]]: Int8Array(12)[[Uint8Array]]: Uint8Array(12)[[Int16Array]]: Int16Array(6)[[Int32Array]]: Int32Array(3)[[ArrayBufferByteLength]]: 12[[ArrayBufferData]]: 1413byteLength: 12byteOffset: 0length: 3Symbol(Symbol.toStringTag): "Int32Array"[[Prototype]]: TypedArray
ints.length
3
ints.byteLength
12

 */


/**
1. 定型数组行为

[]
copyWithin()
entries()
every()
fill()
filter()
find()
findIndex()
forEach()
indexOf()
join()
keys()
lastIndexOf()
length
map()
reduce()
reduceRight()
reverse()
slice()
some()
sort()
toLocaleString()
toString()
values()


const ints = new Int16Array([1, 2, 3]);
const doubleints = ints.map(x => 2*x);
alert(doubleints instanceof Int16Array); // true 


const ints = new Int16Array([1, 2, 3]);
for (const int of ints) {
 alert(int);
}
// 1
// 2
// 3
alert(Math.max(...ints)); // 3 

2. 合并、复制和修改定型数组

定型数组同样使用数组缓冲来存储数据，而数组缓冲无法调整大小。

下列方法不适用于定型数组：
concat()
pop()
push()
shift()
splice()
unshift()
定型数组也提供了两个新方法，可以快速向外或向内复制数据：set()和 subarray()。
set()从提供的数组或定型数组中把值复制到当前定型数组中指定的索引位置

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

subarray()执行与 set()相反的操作，它会基于从原始定型数组中复制的值返回一个新定型数组。

复制值时的开始索引和结束索引是可选的：

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



// 第一个参数是应该返回的数组类型
// 其余参数是应该拼接在一起的定型数组
function typedArrayConcat(typedArrayConstructor, ...typedArrays) {
 // 计算所有数组中包含的元素总数
 const numElements = typedArrays.reduce((x,y) => (x.length || x) + y.length);
 // 按照提供的类型创建一个数组，为所有元素留出空间
 const resultArray = new typedArrayConstructor(numElements);
 // 依次转移数组
 let currentOffset = 0;
 typedArrays.map(x => {
 resultArray.set(x, currentOffset);
 currentOffset += x.length;
 });
 return resultArray;
}
const concatArray = typedArrayConcat(Int32Array,
 Int8Array.of(1, 2, 3),
 Int16Array.of(4, 5, 6),
 Float32Array.of(7, 8, 9));
console.log(concatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concatArray instanceof Int32Array); // true 

3. 下溢和上溢

如何处理下溢和上溢：

// 长度为 2 的有符号整数数组
// 每个索引保存一个二补数形式的有符号整数
// 范围是-128（-1 * 2^7）~127（2^7 - 1）
const ints = new Int8Array(2);

// 长度为 2 的无符号整数数组
// 每个索引保存一个无符号整数
// 范围是 0~255（2^7 - 1）
const unsignedInts = new Uint8Array(2);

// 上溢的位不会影响相邻索引
// 索引只取最低有效位上的 8 位
unsignedInts[1] = 256; // 0x100
console.log(unsignedInts); // [0, 0]

unsignedInts[1] = 511; // 0x1FF
console.log(unsignedInts); // [0, 255]

// 下溢的位会被转换为其无符号的等价值

// 0xFF 是以二补数形式表示的-1（截取到 8 位）,
// 但 255 是一个无符号整数
unsignedInts[1] = -1 // 0xFF (truncated to 8 bits)
console.log(unsignedInts); // [0, 255]

// 上溢自动变成二补数形式
// 0x80 是无符号整数的 128，是二补数形式的-128
ints[1] = 128; // 0x80
console.log(ints); // [0, -128]

// 下溢自动变成二补数形式
// 0xFF 是无符号整数的 255，是二补数形式的-1
ints[1] = 255; // 0xFF
console.log(ints); // [0, -1]


*/

/**

const ints = new Int8Array(2);
undefined
ints
Int8Array(2) [0, 0, buffer: ArrayBuffer(2), byteLength: 2, byteOffset: 0, length: 2, Symbol(Symbol.toStringTag): 'Int8Array']0: 01: 0buffer: ArrayBuffer(2)  byteLength: 2byteOffset: 0length: 2Symbol(Symbol.toStringTag): "Int8Array"[[Prototype]]: TypedArray
const unsignedInts = new Uint8Array(2);
undefined
unsignedInts
Uint8Array(2) [0, 0, buffer: ArrayBuffer(2), byteLength: 2, byteOffset: 0, length: 2, Symbol(Symbol.toStringTag): 'Uint8Array']
ints[0]
0
ints[1]
0
unsignedInts[1]
0
unsignedInts[0]
0
unsignedInts[1] = 256;
256
console.log(unsignedInts);
VM3379:1 Uint8Array(2) [0, 0, buffer: ArrayBuffer(2), byteLength: 2, byteOffset: 0, length: 2, Symbol(Symbol.toStringTag): 'Uint8Array']0: 01: 0buffer: ArrayBuffer(2)  byteLength: 2byteOffset: 0length: 2Symbol(Symbol.toStringTag): "Uint8Array"[[Prototype]]: TypedArray
undefined
unsignedInts[1]
0
unsignedInts[1] = 511; // 0x1FF
console.log(unsignedInts); // [0, 255]
VM3387:2 Uint8Array(2) [0, 255, buffer: ArrayBuffer(2), byteLength: 2, byteOffset: 0, length: 2, Symbol(Symbol.toStringTag): 'Uint8Array']
undefined
unsignedInts[1] = -1 // 0xFF (truncated to 8 bits)
console.log(unsignedInts); // [0, 255]
VM3391:2 Uint8Array(2) [0, 255, buffer: ArrayBuffer(2), byteLength: 2, byteOffset: 0, length: 2, Symbol(Symbol.toStringTag): 'Uint8Array']
undefined
unsignedInts[1]
255
unsignedInts[0]
0
ints[1] = 128; // 0x80
console.log(ints); // [0, -128]
VM3409:2 Int8Array(2) [0, -128, buffer: ArrayBuffer(2), byteLength: 2, byteOffset: 0, length: 2, Symbol(Symbol.toStringTag): 'Int8Array']
undefined
ints[0]
0
ints[1]
-128


 */

// 除了 8 种元素类型，还有一种“夹板”数组类型：Uint8ClampedArray，不允许任何方向溢出。
// 超出最大值 255 的值会被向下舍入为 255，而小于最小值 0 的值会被向上舍入为 0。

// const clampedInts = new Uint8ClampedArray([-1, 0, 255, 256]);
// console.log(clampedInts); // [0, 0, 255, 255]