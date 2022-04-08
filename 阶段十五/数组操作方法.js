/**

concat()方法可以在现有数组全部元素基础上创建一个新数组。它首先会创建一个当前数组的副本，然后再把它的参数添加到副本末尾，最后返回这个新构建的数组。如果传入一个或多个数组，则 concat()会把这些数组的每一项都添加到结果数组。如果参数不是数组，则直接把它们添加到结果数组末尾。

let colors = ["red", "green", "blue"];
let colors2 = colors.concat("yellow", ["black", "brown"]);
console.log(colors); // ["red", "green","blue"]
console.log(colors2); // ["red", "green", "blue", "yellow", "black", "brown"]

原始数组 colors 保持不变。

打平数组参数的行为可以重写，方法是在参数数组上指定一个特殊的符号：Symbol.isConcatSpreadable。这符号能够阻止 concat()打平参数数组。相反，把这个值设置为 true 可以强制打平类数组对象

let colors = ["red", "green", "blue"];
let newColors = ["black", "brown"];
let moreNewColors = {
 [Symbol.isConcatSpreadable]: true,
 length: 2,
 0: "pink",
 1: "cyan"
};
newColors[Symbol.isConcatSpreadable] = false;
// 强制不打平数组
let colors2 = colors.concat("yellow", newColors);
// 强制打平类数组对象
let colors3 = colors.concat(moreNewColors);
console.log(colors); // ["red", "green", "blue"]
console.log(colors2); // ["red", "green", "blue", "yellow", ["black", "brown"]]
console.log(colors3); // ["red", "green", "blue", "pink", "cyan"] 

方法 slice()用于创建一个包含原有数组中一个或多个元素的新数组。

slice()方法可以接收一个或两个参数：返回元素的开始索引和结束索引。

let colors = ["red", "green", "blue", "yellow", "purple"];
let colors2 = colors.slice(1);
let colors3 = colors.slice(1, 4);
alert(colors2); // green,blue,yellow,purple
alert(colors3); // green,blue,yellow

注意 如果 slice()的参数有负值，那么就以数值长度加上这个负值的结果确定位置。比如，在包含 5 个元素的数组上调用 slice(-2,-1)，就相当于调用 slice(3,4)。如果结束位置小于开始位置，则返回空数组

splice()的主要目的是在数组中间插入元素

删除。需要给 splice()传 2 个参数：要删除的第一个元素的位置和要删除的元素数量。可以从数组中删除任意多个元素，比如 splice(0, 2)会删除前两个元素。

插入。需要给 splice()传 3 个参数：开始位置、0（要删除的元素数量）和要插入的元素，可以在数组中指定的位置插入元素。第三个参数之后还可以传第四个、第五个参数，乃至任意多个要插入的元素。比如，splice(2, 0, "red", "green")会从数组位置 2 开始插入字符串"red"和"green"。

替换。splice()在删除元素的同时可以在指定位置插入新元素，同样要传入 3 个参数：开始位置、要删除元素的数量和要插入的任意多个元素。要插入的元素数量不一定跟删除的元素数量一致。比如，splice(2, 1, "red", "green")会在位置 2 删除一个元素，然后从该位置开始向数组中插入"red"和"green"。


splice()方法始终返回这样一个数组，它包含从数组中被删除的元素（如果没有删除元素，则返回空数组）。


let colors = ["red", "green", "blue"];
let removed = colors.splice(0,1); // 删除第一项
alert(colors); // green,blue
alert(removed); // red，只有一个元素的数组
removed = colors.splice(1, 0, "yellow", "orange"); // 在位置 1 插入两个元素
alert(colors); // green,yellow,orange,blue
alert(removed); // 空数组
removed = colors.splice(1, 1, "red", "purple"); // 插入两个值，删除一个元素
alert(colors); // green,red,purple,orange,blue
alert(removed); // yellow，只有一个元素的数组


*/