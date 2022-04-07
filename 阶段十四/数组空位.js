/**

使用数组字面量初始化数组时，可以使用一串逗号来创建空位（hole）。

const options = [,,,,,]; // 创建包含 5 个元素的数组
console.log(options.length); // 5
console.log(options); // [,,,,,]

ES6 新增方法普遍将这些空位当成存在的元素，只不过值为 undefined：

const options = [1,,,,5];
for (const option of options) {
 console.log(option === undefined);
}
// false
// true
// true
// true
// false 


const a = Array.from([,,,]); // 使用 ES6 的 Array.from()创建的包含 3 个空位的数组
for (const val of a) {
 alert(val === undefined);
}
// true
// true
// true

alert(Array.of(...[,,,])); // [undefined, undefined, undefined]

for (const [index, value] of options.entries()) {
 alert(value);
}
// 1
// undefined
// undefined
// undefined
// 5 

ES6 之前的方法则会忽略这个空位

const options = [1,,,,5];
// map()会跳过空位置
console.log(options.map(() => 6)); // [6, undefined, undefined, undefined, 6]
// join()视空位置为空字符串
console.log(options.join('-')); // "1----5"

*/