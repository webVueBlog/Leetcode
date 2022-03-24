/** TypedArray 对象作为内存区域，可以存放多种类型的数据。
 *  同一段内存，不同数据有不同的解读方式，这就叫视图
 *  ArrayBuffer有两种视图，一种是TypedArray视图，另一种是DataView视图
 *  前者的数组成员都是同一个数据类型，后者的数据成员可以是不同的数据类型
 * 
 *  TypedArray包括九种视图类型，每一种都是构造函数
 *  1.Int8Array:8位有符号整数，长度为一个字节
 *  2.Uint8Array：8位无符号整数，长度为一个字节
 *  3.Uint8ClampedArray:8位无符号整数，只是溢出方式处理不同
 *  4.Int16Array：16位有符号整数，长度为2个字节。
 *  5.Uint16Array：16位无符号整数，长度2个字节
 *  6.Int32Array：32位有符号整数，长度为4个字节
 *  7.Float32Array：32位浮点数，长度为4字节
 *  8.Uint32Array：32位无符号整数，长度4字节
 *  9.Float64Array：64位浮点数，长度为8个字节
 * 
 *  这九个构造函数生成的数组，统称为TypedArray视图。
 *  他们很像普通数组，都有length属性，都能用方括号运算符获取单个元素，所有数组的方法都能在其上
 *  使用。普通数组与TypedArray数组的差异有：
 *  TypedArray数组所有成员都是同一种类型
 *  TypeArray所有数组都是连续的，不会有空位
 *  TypedArray数组成员默认值为0，如果是普通数组 new Array(10) 则为10个空位
 *  TypedArray数组只是一层视图，本身不存储数据，他的数据都存放在底层的ArrayBuffer对象中，要
 *     获取底层对象必须用buffer属性
 * .buffer
 */
