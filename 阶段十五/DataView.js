/**

第一种允许你读写 ArrayBuffer 的视图是 DataView。这个视图专为文件 I/O 和网络 I/O 设计，其API 支持对缓冲数据的高度控制

DataView 对缓冲内容没有任何预设，也不能迭代。

必须在对已有的 ArrayBuffer 读取或写入时才能创建 DataView 实例。这个实例可以使用全部或部分 ArrayBuffer，且维护着对该缓冲实例的引用，以及视图在缓冲中开始的位置。

const buf = new ArrayBuffer(16);
// DataView 默认使用整个 ArrayBuffer
const fullDataView = new DataView(buf);
alert(fullDataView.byteOffset); // 0
alert(fullDataView.byteLength); // 16
alert(fullDataView.buffer === buf); // true 


// 构造函数接收一个可选的字节偏移量和字节长度
// byteOffset=0 表示视图从缓冲起点开始
// byteLength=8 限制视图为前 8 个字节
const firstHalfDataView = new DataView(buf, 0, 8);
alert(firstHalfDataView.byteOffset); // 0
alert(firstHalfDataView.byteLength); // 8
alert(firstHalfDataView.buffer === buf); // true


// 如果不指定，则 DataView 会使用剩余的缓冲
// byteOffset=8 表示视图从缓冲的第 9 个字节开始
// byteLength 未指定，默认为剩余缓冲
const secondHalfDataView = new DataView(buf, 8);
alert(secondHalfDataView.byteOffset); // 8
alert(secondHalfDataView.byteLength); // 8
alert(secondHalfDataView.buffer === buf); // true 


要通过 DataView 读取缓冲，还需要几个组件。

首先是要读或写的字节偏移量。可以看成 DataView 中的某种“地址”。
DataView 应该使用 ElementType 来实现 JavaScript 的 Number 类型到缓冲内二进制格式的转换。
最后是内存中值的字节序。默认为大端字节序。

*/

// 1. ElementType

/**
DataView 对存储在缓冲内的数据类型没有预设。

ECMAScript 6 支持 8 种不同的 ElementType

1 2 4 8

Int8 1 8 位有符号整数 signed char 128~127
Uint8 1 8 位无符号整数 unsigned char 0~255
Int16 2 16 位有符号整数 short 32 768~32 767
Uint16 2 16 位无符号整数 unsigned short 0~65 535
Int32 4 32 位有符号整数 int 2 147 483 648~2 147 483 647
Uint32 4 32 位无符号整数 unsigned int 0~4 294 967 295
Float32 4 32 位 IEEE-754 浮点数 float 3.4e+38~+3.4e+38
Float64 8 64 位 IEEE-754 浮点数 double 1.7e+308~+1.7e+308

*/


/**

DataView 每种类型都暴露了 get 和 set 方法，这些方法使用 byteOffset（字节偏移量）定位要读取或写入值的位置。


类型是可以互换使用的

声明 ArrayBuffer 则会将所有二进制位初始化为 0
。ArrayBuffer 在分配失败时会抛出错误。

通过声明 ArrayBuffer 分配的堆内存可以被当成垃圾回收，不用手动释放。

// 说明整个缓冲确实所有二进制位都是 0
// 检查第一个和第二个字符
alert(view.getInt8(0)); // 0
alert(view.getInt8(1)); // 0


// 检查整个缓冲
alert(view.getInt16(0)); // 0

*/

/**


// 将整个缓冲都设置为 1
// 255 的二进制表示是 11111111（2^8 - 1）
view.setUint8(0, 255); 

// DataView 会自动将数据转换为特定的 ElementType
// 255 的十六进制表示是 0xFF
view.setUint8(1, 0xFF);


// 现在，缓冲里都是 1 了
// 如果把它当成二补数的有符号整数，则应该是-1
alert(view.getInt16(0)); // -1 


2. 字节序

“字节序”指的是计算系统维护的一种字节顺序的约定。DataView 只支持两种约定：大端字节序和小端字节序。大端字节序也称为“网络字节序”，意思是最高有效位保存在第一个字节，而最低有效位保存在最后一个字节。小端字节序正好相反，即最低有效位保存在第一个字节，最高有效位保存在最后一个字节。


JavaScript 运行时所在系统的原生字节序决定了如何读取或写入字节，但 DataView 并不遵守这个约定。

对一段内存而言，DataView 是一个中立接口，它会遵循你指定的字节序。DataView 的所有 API 方法都以大端字节序作为默认值，但接收一个可选的布尔值参数，设置为 true 即可启用小端字节序。

// 在内存中分配两个字节并声明一个 DataView
const buf = new ArrayBuffer(2);
const view = new DataView(buf);

// 填充缓冲，让第一位和最后一位都是 1
view.setUint8(0, 0x80); // 设置最左边的位等于 1
view.setUint8(1, 0x01); // 设置最右边的位等于 1

// 缓冲内容（为方便阅读，人为加了空格）
// 0x8 0x0 0x0 0x1
// 1000 0000 0000 0001

// 按大端字节序读取 Uint16
// 0x80 是高字节，0x01 是低字节
// 0x8001 = 2^15 + 2^0 = 32768 + 1 = 32769
alert(view.getUint16(0)); // 32769

// 按小端字节序读取 Uint16
// 0x01 是高字节，0x80 是低字节
// 0x0180 = 2^8 + 2^7 = 256 + 128 = 384
alert(view.getUint16(0, true)); // 384

// 按大端字节序写入 Uint16
view.setUint16(0, 0x0004);

// 缓冲内容（为方便阅读，人为加了空格）
// 0x0 0x0 0x0 0x4
// 0000 0000 0000 0100

alert(view.getUint8(0)); // 0
alert(view.getUint8(1)); // 4

// 按小端字节序写入 Uint16
view.setUint16(0, 0x0002, true);

// 缓冲内容（为方便阅读，人为加了空格）
// 0x0 0x2 0x0 0x0
// 0000 0010 0000 0000

alert(view.getUint8(0)); // 2
alert(view.getUint8(1)); // 0


3. 边界情形

DataView 完成读、写操作的前提是必须有充足的缓冲区，否则就会抛出 RangeError


const buf = new ArrayBuffer(6);
const view = new DataView(buf);

// 尝试读取部分超出缓冲范围的值
view.getInt32(4);
// RangeError

// 尝试读取超出缓冲范围的值
view.getInt32(8);
// RangeError

// 尝试读取超出缓冲范围的值
view.getInt32(-1);
// RangeError

// 尝试写入超出缓冲范围的值
view.setInt32(4, 123);
// RangeError 

const buf = new ArrayBuffer(1);
const view = new DataView(buf);

view.setInt8(0, 1.5);
alert(view.getInt8(0)); // 1

view.setInt8(0, [4]);
alert(view.getInt8(0)); // 4

view.setInt8(0, 'f');
alert(view.getInt8(0)); // 0

view.setInt8(0, Symbol());
// TypeError 


*/


// 0x80
// 0x是C语言中16进制数的表示方法。
// 0x80等于十进制的128

// 0x80在计算机内部表示为1000 0000

/**
 * 
const buf = new ArrayBuffer(2);
undefined
const view = new DataView(buf);
undefined
view.setUint8(0,0*81)
undefined
view.setUint8(1,0*10);
undefined
view
DataView(2)buffer: ArrayBuffer(2)  byteLength: 2[[Prototype]]: ArrayBufferbyteLength: 2constructor: ƒ ArrayBuffer()slice: ƒ slice()Symbol(Symbol.toStringTag): "ArrayBuffer"get byteLength: ƒ byteLength()[[Prototype]]: Object[[Int8Array]]: Int8Array(2)0: 01: 0buffer: ArrayBuffer(2)  byteLength: 2byteOffset: 0length: 2Symbol(Symbol.toStringTag): "Int8Array"[[Prototype]]: TypedArray[[Uint8Array]]: Uint8Array(2)0: 01: 0buffer: ArrayBuffer(2)  byteLength: 2byteOffset: 0length: 2Symbol(Symbol.toStringTag): "Uint8Array"[[Prototype]]: TypedArray[[Int16Array]]: Int16Array(1)0: 0buffer: ArrayBuffer(2)  byteLength: 2byteOffset: 0length: 1Symbol(Symbol.toStringTag): "Int16Array"[[Prototype]]: TypedArray[[ArrayBufferByteLength]]: 2[[ArrayBufferData]]: 328byteLength: 2byteOffset: 0[[Prototype]]: DataView
view.buffer
ArrayBuffer(2)byteLength: 2[[Prototype]]: ArrayBuffer[[Int8Array]]: Int8Array(2)[[Uint8Array]]: Uint8Array(2)[[Int16Array]]: Int16Array(1)[[ArrayBufferByteLength]]: 2[[ArrayBufferData]]: 328
view.getUnit16(0);
VM1065:1 Uncaught TypeError: view.getUnit16 is not a function
    at <anonymous>:1:6
（匿名） @ VM1065:1
view.getUint16(0);
0
view.setUint8(0, 0x80);
undefined
view.setUint8(1, 0x01);
undefined
view.getUint16(0);
32769
view.getUint16(0, true);
384
view.getUint16(0, 0x0004);
384
view.setUint16(0, 0x004);
undefined
view.getUint8(0);
0
view.getUint8(1);
4
view.getUint16(0, 0x0040);
1024
view.getUint16(0,0x004);
1024
view.setUint16(0, 0x002);
undefined
view.getUint16(0, 0x002);
512
view.getUint8(0);
0
view.getUint8(1);
2
view.setUint16(0, 0x0002, true);
undefined
view.getUint8(0);
2
view.getUint8(1);
0
 */