/**
let stringObject = new String("hello world");

let stringValue = "hello world";
console.log(stringValue.length); // "11"

1. JavaScript 字符

JavaScript 字符串由 16 位码元（code unit）组成。对多数字符来说，每 16 位码元对应一个字符。

charAt()方法返回给定索引位置的字符，由传给方法的整数参数指定。

let message = "abcde";
console.log(message.charAt(2)); // "c"

使用 charCodeAt()方法可以查看指定码元的字符编码。

let message = "abcde";
// Unicode "Latin small letter C"的编码是 U+0063
console.log(message.charCodeAt(2)); // 99
// 十进制 99 等于十六进制 63
console.log(99 === 0x63); // true


fromCharCode()方法用于根据给定的 UTF-16 码元创建字符串中的字符。这个方法可以接受任意多个数值，并返回将所有数值对应的字符拼接起来的字符串

// Unicode "Latin small letter A"的编码是 U+0061
// Unicode "Latin small letter B"的编码是 U+0062
// Unicode "Latin small letter C"的编码是 U+0063
// Unicode "Latin small letter D"的编码是 U+0064
// Unicode "Latin small letter E"的编码是 U+0065
console.log(String.fromCharCode(0x61, 0x62, 0x63, 0x64, 0x65)); // "abcde"
// 0x0061 === 97
// 0x0062 === 98
// 0x0063 === 99
// 0x0064 === 100
// 0x0065 === 101
console.log(String.fromCharCode(97, 98, 99, 100, 101)); // "abcde"

concat()，用于将一个或多个字符串拼接成一个新字符串。

let stringValue = "hello ";
let result = stringValue.concat("world");
console.log(result); // "hello world"
console.log(stringValue); // "hello"

let stringValue = "hello ";
let result = stringValue.concat("world", "!");
console.log(result); // "hello world!"
console.log(stringValue); // "hello"

*/

/**

ECMAScript 提供了 3 个从字符串中提取子字符串的方法：slice()、substr()和 substring()

let stringValue = "hello world";
console.log(stringValue.slice(3)); // "lo world"
console.log(stringValue.substring(3)); // "lo world"
console.log(stringValue.substr(3)); // "lo world"
console.log(stringValue.slice(3, 7)); // "lo w"
console.log(stringValue.substring(3,7)); // "lo w"
console.log(stringValue.substr(3, 7)); // "lo worl"

let stringValue = "hello world";
console.log(stringValue.slice(-3)); // "rld"
console.log(stringValue.substring(-3)); // "hello world"
console.log(stringValue.substr(-3)); // "rld"
console.log(stringValue.slice(3, -4)); // "lo w"
console.log(stringValue.substring(3, -4)); // "hel"
console.log(stringValue.substr(3, -4)); // "" (empty string)

*/

/**

4. 字符串位置方法
有两个方法用于在字符串中定位子字符串：indexOf()和 lastIndexOf()。

let stringValue = "hello world";
console.log(stringValue.indexOf("o")); // 4
console.log(stringValue.lastIndexOf("o")); // 7 

let stringValue = "hello world";
console.log(stringValue.indexOf("o", 6)); // 7
console.log(stringValue.lastIndexOf("o", 6)); // 4

5. 字符串包含方法
ECMAScript 6 增加了 3 个用于判断字符串中是否包含另一个字符串的方法：startsWith()、
endsWith()和 includes()

6. trim()方法
ECMAScript 在所有字符串上都提供了 trim()方法。这个方法会创建字符串的一个副本，删除前、
后所有空格符，再返回结果。

7. repeat()方法
ECMAScript 在所有字符串上都提供了 repeat()方法。这个方法接收一个整数参数，表示要将字
符串复制多少次，然后返回拼接所有副本后的结果。


8. padStart()和 padEnd()方法

padStart()和 padEnd()方法会复制字符串，如果小于指定长度，则在相应一边填充字符，直至
满足长度条件。这两个方法的第一个参数是长度，第二个参数是可选的填充字符串，默认为空格
（U+0020）。

let stringValue = "foo";
console.log(stringValue.padStart(6)); // " foo"
console.log(stringValue.padStart(9, ".")); // "......foo"
console.log(stringValue.padEnd(6)); // "foo "
console.log(stringValue.padEnd(9, ".")); // "foo......"

可选的第二个参数并不限于一个字符。如果提供了多个字符的字符串，则会将其拼接并截断以匹配
指定长度。此外，如果长度小于或等于字符串长度，则会返回原始字符串。

let stringValue = "foo";
console.log(stringValue.padStart(8, "bar")); // "barbafoo"
console.log(stringValue.padStart(2)); // "foo"
console.log(stringValue.padEnd(8, "bar")); // "foobarba"
console.log(stringValue.padEnd(2)); // "foo" 

9. 字符串迭代与解构

字符串的原型上暴露了一个`@@iterator` 方法，表示可以迭代字符串的每个字符。可以像下面这样

手动使用迭代器：

let message = "abc";
let stringIterator = message[Symbol.iterator]();
console.log(stringIterator.next()); // {value: "a", done: false}
console.log(stringIterator.next()); // {value: "b", done: false}
console.log(stringIterator.next()); // {value: "c", done: false}
console.log(stringIterator.next()); // {value: undefined, done: true}

在 for-of 循环中可以通过这个迭代器按序访问每个字符：

for (const c of "abcde") {
 console.log(c);
}
// a
// b
// c
// d
// e

有了这个迭代器之后，字符串就可以通过解构操作符来解构了。比如，可以更方便地把字符串分割
为字符数组：

let message = "abcde";
console.log([...message]); // ["a", "b", "c", "d", "e"]

10. 字符串大小写转换

toLowerCase()、toLocaleLowerCase()、

toUpperCase()和toLocaleUpperCase()

11. 字符串模式匹配方法

let text = "cat, bat, sat, fat";
let pattern = /.at/;
// 等价于 pattern.exec(text)
let matches = text.match(pattern);
console.log(matches.index); // 0
console.log(matches[0]); // "cat"
console.log(pattern.lastIndex); // 0 

$$ $
$& 匹配整个模式的子字符串。与 RegExp.lastMatch 相同
$' 匹配的子字符串之前的字符串。与 RegExp.rightContext 相同
$` 匹配的子字符串之后的字符串。与 RegExp.leftContext 相同
$n 匹配第 n 个捕获组的字符串，其中 n 是 0~9。比如，$1 是匹配第一个捕获组的字符串，$2 是匹配第二个
捕获组的字符串，以此类推。如果没有捕获组，则值为空字符串
$nn 匹配第 nn 个捕获组字符串，其中 nn 是 01~99。比如，$01 是匹配第一个捕获组的字符串，$02 是匹配第
二个捕获组的字符串，以此类推。如果没有捕获组，则值为空字符串

12. localeCompare()方法

let stringValue = "yellow";
console.log(stringValue.localeCompare("brick")); // 1
console.log(stringValue.localeCompare("yellow")); // 0
console.log(stringValue.localeCompare("zoo")); // -1

13. HTML 方法

anchor(name) <a name="name">string</a>
big() <big>string</big>
bold() <b>string</b>
fixed() <tt>string</tt>
fontcolor(color) <font color="color">string</font>
fontsize(size) <font size="size">string</font>
italics() <i>string</i>
link(url) <a href="url">string</a>
small() <small>string</small>
strike() <strike>string</strike>
sub() <sub>string</sub>
sup() <sup>string</sup>

*/