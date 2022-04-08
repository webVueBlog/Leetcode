/**

ArrayBuffer 是所有 定型数组 及 视图引用 的基本单位。

ArrayBuffer()是一个普通的 JavaScript 构造函数，可用于在内存中分配特定数量的字节空间。

const buf = new ArrayBuffer(16); // 在内存中分配 16 字节
alert(buf.byteLength); // 16 

ArrayBuffer 一经创建就不能再调整大小。


可以使用 slice()复制其全部或部分到一个新实例中：


const buf1 = new ArrayBuffer(16);
const buf2 = buf1.slice(4, 12);
alert(buf2.byteLength); // 8 

不能仅通过对 ArrayBuffer 的引用就读取或写入其内容。要读取或写入 ArrayBuffer，就必须
通过视图。视图有不同的类型，但引用的都是 ArrayBuffer 中存储的二进制数据。

*/

