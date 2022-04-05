/**

String（字符串）数据类型表示零或多个 16 位 Unicode 字符序列。

let firstName = "John"; 
let lastName = 'Jacob'; 
let lastName = `Jingleheimerschmidt`

let firstName = 'Nicholas"; // 语法错误：开头和结尾的引号必须是同一种

1. 字符字面量

\n 换行
\t 制表
\b 退格
\r 回车
\f 换页
\\ 反斜杠（\）
\' 单引号（'），在字符串以单引号标示时使用，例如'He said, \'hey.\''
\" 双引号（"），在字符串以双引号标示时使用，例如"He said, \"hey.\""
\` 反引号（`），在字符串以反引号标示时使用，例如`He said, \`hey.\``
\xnn 以十六进制编码 nn 表示的字符（其中 n 是十六进制数字 0~F），例如\x41 等于"A"
\unnnn 以十六进制编码 nnnn 表示的 Unicode 字符（其中 n 是十六进制数字 0~F），例如\u03a3 等于希腊字
符"Σ"

2. 字符串的特点

ECMAScript 中的字符串是不可变的（immutable），意思是一旦创建，它们的值就不能变了。

3. 转换为字符串

let age = 11; 
let ageAsString = age.toString(); // 字符串"11" 
let found = true; 
let foundAsString = found.toString(); // 字符串"true"

null 和 undefined 值没有 toString()方法。

let num = 10; 
console.log(num.toString()); // "10" 
console.log(num.toString(2)); // "1010" 
console.log(num.toString(8)); // "12" 
console.log(num.toString(10)); // "10" 
console.log(num.toString(16)); // "a"

如果你不确定一个值是不是 null 或 undefined，可以使用 String()转型函数，它始终会返回表示相应类型值的字符串。

let value1 = 10; 
let value2 = true; 
let value3 = null; 
let value4; 
console.log(String(value1)); // "10" 
console.log(String(value2)); // "true" 
console.log(String(value3)); // "null" 
console.log(String(value4)); // "undefined"

4. 模板字面量

ECMAScript 6 新增了使用模板字面量定义字符串的能力。

let myMultiLineString = 'first line\nsecond line'; 
let myMultiLineTemplateLiteral = `first line 
second line`; 
console.log(myMultiLineString); 
// first line 
// second line" 
console.log(myMultiLineTemplateLiteral); 
// first line
// second line 
console.log(myMultiLineString === myMultiLinetemplateLiteral); // true

// 这个模板字面量在换行符之后有 25 个空格符
let myTemplateLiteral = `first line 
 second line`; 
console.log(myTemplateLiteral.length); // 47 
// 这个模板字面量以一个换行符开头
let secondTemplateLiteral = ` 
first line 
second line`; 
console.log(secondTemplateLiteral[0] === '\n'); // true 
// 这个模板字面量没有意料之外的字符
let thirdTemplateLiteral = `first line 
second line`; 
console.log(thirdTemplateLiteral); 
// first line 
// second line

5. 字符串插值

技术上讲，模板字面量不是字符串，而是一种特殊的 JavaScript 句法表达式

let value = 5; 
let exponent = 'second'; 
// 以前，字符串插值是这样实现的：
let interpolatedString = 
 value + ' to the ' + exponent + ' power is ' + (value * value); 

// 现在，可以用模板字面量这样实现：
let interpolatedTemplateLiteral = 
 `${ value } to the ${ exponent } power is ${ value * value }`; 

console.log(interpolatedString); // 5 to the second power is 25 
console.log(interpolatedTemplateLiteral); // 5 to the second power is 25

console.log(`Hello, ${ `World` }!`); // Hello, World!

let foo = { toString: () => 'World' }; 
console.log(`Hello, ${ foo }!`); // Hello, World!

function capitalize(word) { 
 return `${ word[0].toUpperCase() }${ word.slice(1) }`; 
} 
console.log(`${ capitalize('hello') }, ${ capitalize('world') }!`); // Hello, World!

6. 模板字面量标签函数

模板字面量也支持定义标签函数（tag function），而通过标签函数可以自定义插值行为。标签函数会接收被插值记号分隔后的模板和对每个表达式求值的结果。

标签函数本身是一个常规函数，通过前缀到模板字面量来应用自定义行为

接收到的参数依次是原始字符串数组和对每个表达式求值的结果。

let a = 6; 
let b = 9; 
function simpleTag(strings, aValExpression, bValExpression, sumExpression) { 
 console.log(strings); 
 console.log(aValExpression); 
 console.log(bValExpression); 
 console.log(sumExpression); 
 return 'foobar'; 
} 
let untaggedResult = `${ a } + ${ b } = ${ a + b }`; 
let taggedResult = simpleTag`${ a } + ${ b } = ${ a + b }`; 
// ["", " + ", " = ", ""] 
// 6 
// 9 
// 15

console.log(untaggedResult); // "6 + 9 = 15" 
console.log(taggedResult); // "foobar"

let a = 6; 
let b = 9; 
function simpleTag(strings, ...expressions) { 
 console.log(strings); 
 for(const expression of expressions) { 
 console.log(expression); 
 } 
 return 'foobar'; 
} 
let taggedResult = simpleTag`${ a } + ${ b } = ${ a + b }`; 
// ["", " + ", " = ", ""] 
// 6 
// 9 
// 15 
console.log(taggedResult); // "foobar"



7. 原始字符串


使用模板字面量也可以直接获取原始的模板字面量内容

可以使用默认的 String.raw 标签函数：


*/

console.log(String('') === '') // true

function capitalize(word) {
    return `${ word[0].toUpperCase() }${ word.slice(1).toLowerCase() }`;
}
console.log(`${capitalize('hEllo')}, ${capitalize('worLd')}!`); // Hello, World!

let value = '';

function append() {
    value = `${value}abc`
    console.log(value);
}
append(); // abc 
append(); // abcabc 
append(); // abcabcabc
append(); // abcabcabc

function printRaw(strings) {
    console.log('Actual characters:');
    for (const string of strings) {
        console.log(string);
    }
    console.log('Escaped characters;');
    for (const rawString of strings.raw) {
        console.log(rawString);
    }
}
printRaw `\u00A9${'and'}\n`;
// Actual characters:
// © 
//（换行符）
// Escaped characters: 
// \u00A9 
// \n

/**

Actual characters:
©


Escaped characters;
\u00A9
\n

 */ // Unicode 示例
// \u00A9 是版权符号
console.log(`\u00A9`); // © 
console.log(String.raw `\u00A9`); // \u00A9 
// 换行符示例
console.log(`first line\nsecond line`);
// first line 
// second line 
console.log(String.raw `first line\nsecond line`); // "first line\nsecond line" 
// 对实际的换行符来说是不行的
// 它们不会被转换成转义序列的形式
console.log(`first line
second line`);
// first line 
// second line 
console.log(String.raw `first line 
second line`);
// first line
// second line

/**


©
\u00A9
first line
second line
first line\nsecond line
first line
second line
first line 
second line


 */

let a = 6;
let b = 9;

function zipTag(strings, ...expressions) {
    return strings[0] +
        expressions.map((e, i) => `${e}${strings[i + 1]}`)
        .join('');
}
let untaggedResult = `${a} + ${b} = ${a + b}`;
let taggedResult = zipTag `${a} + ${b} = ${a + b}`;
console.log(untaggedResult); // "6 + 9 = 15" 
console.log(taggedResult); // "6 + 9 = 15"