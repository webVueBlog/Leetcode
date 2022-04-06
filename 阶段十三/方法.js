/**

padStart()和 padEnd()方法会复制字符串


let stringValue = "foo"; 
console.log(stringValue.padStart(6)); // " foo" 
console.log(stringValue.padStart(9, ".")); // "......foo" 
console.log(stringValue.padEnd(6)); // "foo " 
console.log(stringValue.padEnd(9, ".")); // "foo......"


如果长度小于或等于字符串长度，则会返回原始字符串。

let stringValue = "foo"; 
console.log(stringValue.padStart(8, "bar")); // "barbafoo" 
console.log(stringValue.padStart(2)); // "foo" 
console.log(stringValue.padEnd(8, "bar")); // "foobarba" 
console.log(stringValue.padEnd(2)); // "foo"


*/