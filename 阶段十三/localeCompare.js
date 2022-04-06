/**

localeCompare()，这个方法比较两个字符串

如果按照字母表顺序，字符串应该排在字符串参数前头，则返回负值。

如果字符串与字符串参数相等，则返回 0。

如果按照字母表顺序，字符串应该排在字符串参数后头，则返回正值。

let stringValue = "yellow"; 
console.log(stringValue.localeCompare("brick")); // 1 
console.log(stringValue.localeCompare("yellow")); // 0 
console.log(stringValue.localeCompare("zoo")); // -1

*/