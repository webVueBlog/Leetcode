/**

所有对象都有 toLocaleString()、toString()和 valueOf()方法。

let colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组

alert(colors.toString()); // red,blue,green 
alert(colors.valueOf()); // red,blue,green 
alert(colors); // red,blue,green


let person1 = { 
 toLocaleString() { 
 return "Nikolaos"; 
 }, 
 toString() { 
 return "Nicholas"; 
 } 
}; 
let person2 = { 
 toLocaleString() { 
 return "Grigorios"; 
 }, 
 toString() { 
 return "Greg"; 
 } 
}; 
let people = [person1, person2]; 
alert(people); // Nicholas,Greg 
alert(people.toString()); // Nicholas,Greg 
alert(people.toLocaleString()); // Nikolaos,Grigorios


*/

let colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组

// valueOf()返回的还是数组本身。
console.log(colors.valueOf()) // [ 'red', 'blue', 'green' ]

// join()方法接收一个参数，即字符串分隔符，返回包含所有项的字符串。

// let colors = ["red", "green", "blue"];
alert(colors.join(",")); // red,green,blue 
alert(colors.join("||")); // red||green||blue

// 如果不给 join() 传入任何参数， 或者传入 undefined， 则仍然使用逗号作为分隔符。