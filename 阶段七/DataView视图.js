/**如果一段数据包括多种类型，现在除了建立ArrayBuffer对象的复合视图外，还可以通过
 * DataView视图进行操作
 * DataView视图提供更多操作选项，而且支持设定字节序。
 * 设计目的上：ArrayBuffer对象的各种TypedArray视图用于向网卡、声卡之类的本机设备
 * 传递数据，而DataView视图用作处理网络设备传来的数据，所以大端字节序或者小端字节序都可以自行设定
 *
 * DataView视图本身也是构造函数,接受一个ArrayBuffer对象作为参数的生成视图
 */
let buf = new ArrayBuffer(24);
let dv = new DataView(buf);
console.log(dv);
/**
 * DataView(24)
 * buffer: ArrayBuffer(24)
 * byteLength: 24
 */

/** DataView提供8个方法读取内存
 *  getInt8 读取1个字节 返回一个8位整数
 *  getUint8 读取1个字节 返回一个无符号的8位整数
 *  getInt16 读取2个字节 返回一个16位整数
 *  getUint16 读取2个字节，返回一个无符号的16位整数
 *  getInt32 读取4个字节，返回一个32位整数
 *  getUint32 读取4个字节 返回一个32位无符号整数
 *  getFloat32 读取4个字节 返回一个32位浮点数
 *  getFloat64 读取8个字节 返回一个64位浮点数
 */
let v1 = dv.getUint8(0);
console.log(v1); //0 从第一个字节读取8位无符号整数
let v2 = dv.getUint16(1); //从第2个字节读取16位无符号整数
//前3个字节 分别是一个8位整数 和 1个16位整数

/** DataView的默认情况下，是大端字节序，如果要使用小端字节序，需要把第二个参数改为true */
/** DataView提供8个方法读取内存
 *  setInt8 写入1个字节8位整数
 *  setUint8 写入1个字节无符号的8位整数
 *  setInt16 写入2个字节16位整数
 *  setUint16 写入2个字节，返回一个无符号的16位整数
 *  setInt32 写入4个字节，返回一个32位整数
 *  setUint32 写入4个字节32位无符号整数
 *  setFloat32 写入4个字节32位浮点数
 *  setFloat64 写入8个字节64位浮点数
 */
dv.setInt32(0, 25, false); //从1字节开始写入值为25的32位整数

//判断计算机字节序
let little = function () {
 let butter = new ArrayBuffer(2);
 new DataView(butter).setInt16(0, 256, true);
 console.log(new Int16Array(butter)); //2/2
 return new Int16Array(butter)[0] === 256;
};
console.log(little());  //是小端字节序
// DataView {
//  byteLength: 24,
//   byteOffset: 0,
//    buffer: ArrayBuffer {
//   [Uint8Contents]: < 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 >,
//    byteLength: 24
//  }
// }
// 0
// Int16Array(1)[256]
// true