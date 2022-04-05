/**

Undefined 类型只有一个值，就是特殊值 undefined。

let message; 
console.log(message == undefined); // true

默认情况下，任何未经初始化的变量都会取得 undefined 值。

对未声明的变量调用 delete 也不会报错，但这个操作没什么用，实际上在严格模式下会抛出错误。

在对未初始化的变量调用 typeof 时，返回的结果是"undefined"

let message; // 这个变量被声明了，只是值为 undefined 
// 确保没有声明过这个变量
// let age 
console.log(typeof message); // "undefined" 
console.log(typeof age); // "undefined"

undefined 是一个假值。

let message; // 这个变量被声明了，只是值为 undefined 
// age 没有声明
if (message) { 
 // 这个块不会执行
} 
if (!message) { 
 // 这个块会执行
} 
if (age) { 
 // 这里会报错
}

*/

let message; // 这个变量被声明了，只是值为 undefined 
// age 没有声明
if (message) {
    // 这个块不会执行
    console.log('1')

}
if (!message) {
    // 这个块会执行
    console.log('11')

}
if (age) {
    // 这里会报错
    console.log('111')

}

// let message;
// console.log(message === undefined); // true

// let message; // 这个变量被声明了，只是值为 undefined 
// // 确保没有声明过这个变量
// // let age 
// console.log(message); // "undefined" 
// console.log(age); // 报错


// 注意 即使未初始化的变量会被自动赋予 undefined 值， 但我们仍然建议在声明变量的
// 同时进行初始化。 这样， 当 typeof 返回 "undefined"
// 时， 你就会知道那是因为给定的变
// 量尚未声明， 而不是声明了但未初始化。