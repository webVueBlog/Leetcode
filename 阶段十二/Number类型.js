/**

Number 类型使用 IEEE 754 格式表示整数和浮点值

对于八进制字面量，第一个数字必须是零（0），然后是相应的八进制数字（数值 0~7）。

let octalNum1 = 070; // 八进制的 56 
let octalNum2 = 079; // 无效的八进制值，当成 79 处理
let octalNum3 = 08; // 无效的八进制值，当成 8 处理

十六进制字面量，必须让真正的数值前缀 0x（区分大小写），然后是十六进制数字（0~9 以及 A~F）。

let hexNum1 = 0xA; // 十六进制 10 
let hexNum2 = 0x1f; // 十六进制 31

1. 浮点值
let floatNum1 = 1.1; 
let floatNum2 = 0.1; 
let floatNum3 = .1; // 有效，但不推荐

存储浮点值使用的内存空间是存储整数值的两倍

let floatNum1 = 1.; // 小数点后面没有数字，当成整数 1 处理
let floatNum2 = 10.0; // 小数点后面是零，当成整数 10 处理

对于非常大或非常小的数值，浮点值可以用科学记数法来表示。

let floatNum = 3.125e7; // 等于 31250000

默认情况下，ECMAScript 会将小数点后至少包含 6 个零的浮点值转换为科学记数法

浮点值的精确度最高可达 17 位小数，但在算术计算中远不如整数精确。

0.1 加 0.2 得到的不是 0.3，而是 0.300 000 000 000 000 04。

if (a + b == 0.3) { // 别这么干！
 console.log("You got 0.3."); 
}

如果两个数值分别是 0.05 和 0.25，或者 0.15 和 0.15，那没问题。

永远不要测试某个特定的浮点值。

微小的舍入错误

2. 值的范围

ECMAScript 可以表示的最小数值保存在 Number.MIN_VALUE 中，这个值在多数浏览器中是 5e324；可以表示的最大数值保存在Number.MAX_VALUE 中，这个值在多数浏览器中是 1.797 693 134 862 315 7e+308。

任何无法表示的负数以-Infinity（负无穷大）表示，任何无法表示的正数以 Infinity（正无穷大）表示。

要确定一个值是不是有限大 可以使用 isFinite() 函数

let result = Number.MAX_VALUE + Number.MAX_VALUE; 
console.log(isFinite(result)); // false

注意 使用 Number.NEGATIVE_INFINITY 和 Number.POSITIVE_INFINITY 也可以获
取正、负 Infinity。没错，这两个属性包含的值分别就是-Infinity 和 Infinity。

3. NaN

有一个特殊的数值叫 NaN，意思是“不是数值”（Not a Number），用于表示本来要返回数值的操作失败了（而不是抛出错误）。

console.log(0/0); // NaN 
console.log(-0/+0); // NaN

如果分子是非 0 值，分母是有符号 0 或无符号 0，则会返回 Infinity 或-Infinity：

console.log(5/0); // Infinity 
console.log(5/-0); // -Infinity

任何涉及 NaN 的操作始终返回 NaN

NaN 不等于包括 NaN 在内的任何值。

console.log(NaN == NaN); // false

ECMAScript 提供了 isNaN()函数。该函数接收一个参数，可以是任意数据类型，然后判断这个参数是否“不是数值”。

任何不能转换为数值的值都会导致这个函数返回true。

console.log(isNaN(NaN)); // true 
console.log(isNaN(10)); // false，10 是数值
console.log(isNaN("10")); // false，可以转换为数值 10 
console.log(isNaN("blue")); // true，不可以转换为数值
console.log(isNaN(true)); // false，可以转换为数值 1

4. 数值转换

Number()、parseInt()和 parseFloat()

Number()是转型函数，可用于任何数据类型。后两个函数主要用于将字符串转换为数值。

Number()函数

布尔值，true 转换为 1，false 转换为 0。

数值，直接返回。

null，返回 0。

undefined，返回 NaN。

字符串

Number("1")返回 1，Number("123")返回 123，Number("011")返回 11（忽略前面的零）。

如果字符串包含有效的浮点值格式如"1.1"，则会转换为相应的浮点值

如果字符串包含有效的十六进制格式如"0xf"，则会转换为与该十六进制值对应的十进制整数值。

如果是空字符串（不包含字符），则返回 0。，并按照上述规则转换返回的值。如果转换结果是 NaN，则调用 toString()方法，再按照转换字符串的规则转换。

对象，调用 valueOf()方法，

let num1 = Number("Hello world!"); // NaN 
let num2 = Number(""); // 0 
let num3 = Number("000011"); // 11 
let num4 = Number(true); // 1

如果第一个字符不是数值字符、加号或减号，parseInt()立即返回 NaN。 这意味着空字符串也会返回 NaN

"1234blue"会被转换为 1234

"22.5"会被转换为 22，因为小数点不是有效的整数字符。

let num1 = parseInt("1234blue"); // 1234 
let num2 = parseInt(""); // NaN 
let num3 = parseInt("0xA"); // 10，解释为十六进制整数
let num4 = parseInt(22.5); // 22 
let num5 = parseInt("70"); // 70，解释为十进制值
let num6 = parseInt("0xf"); // 15，解释为十六进制整数

let num = parseInt("0xAF", 16); // 175

let num1 = parseInt("AF", 16); // 175 
let num2 = parseInt("AF"); // NaN

let num1 = parseInt("10", 2); // 2，按二进制解析
let num2 = parseInt("10", 8); // 8，按八进制解析
let num3 = parseInt("10", 10); // 10，按十进制解析
let num4 = parseInt("10", 16); // 16，按十六进制解析

parseFloat()函数

"22.34.5"将转换成 22.34。

parseFloat()只解析十进制值，因此不能指定底数 

let num1 = parseFloat("1234blue"); // 1234，按整数解析
let num2 = parseFloat("0xA"); // 0 
let num3 = parseFloat("22.5"); // 22.5 
let num4 = parseFloat("22.34.5"); // 22.34 
let num5 = parseFloat("0908.5"); // 908.5 
let num6 = parseFloat("3.125e7"); // 31250000

*/

let nameObj = 'name';
console.log(nameObj.valueOf());

let num1 = parseInt("10", 2); // 2，按二进制解析
let num2 = parseInt("10", 8); // 8，按八进制解析
let num3 = parseInt("10", 10); // 10，按十进制解析
let num4 = parseInt("10", 16); // 16，按十六进制解析

console.log(num1, num2, num3, num4)