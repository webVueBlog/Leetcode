/**

Boolean（布尔值）类型 有两个字面值：true 和 false

Boolean true false
String 非空字符串 ""（空字符串）
Number 非零数值（包括无穷值） 0、NaN（参见后面的相关内容）
Object 任意对象 null
Undefined N/A（不存在） undefined

*/

console.log(Boolean("1"))

console.log(Boolean(''))

console.log(Boolean(1))

console.log(Boolean(0))

console.log(Boolean(NaN))

console.log(Boolean(null))
console.log(Boolean(undefined))

// true
// false
// true
// false
// false
// false
// false