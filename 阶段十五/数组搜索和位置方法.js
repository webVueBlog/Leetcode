/**

ECMAScript 提供两类搜索数组的方法：按 严格相等 搜索 和 按断言函数 搜索。

ECMAScript 提供了 3 个严格相等的搜索方法：indexOf()、lastIndexOf()和 includes()

第三个方法是 ECMAScript 7 新增的 includes()

indexOf()和 lastIndexOf()都返回要查找的元素在数组中的位置，如果没找到则返回1。

includes()返回布尔值，表示是否至少找到一个与指定元素匹配的项。

ECMAScript 也允许按照定义的断言函数搜索数组，每个索引都会调用这个函数。断言函数的返回值决定了相应索引的元素是否被认为匹配。


断言函数接收 3 个参数：元素、索引和数组本身。


断言函数返回真值，表示是否匹配。

find()和 findIndex()方法使用了断言函数。这两个方法都从数组的最小索引开始。find()返回第一个匹配的元素，findIndex()返回第一个匹配元素的索引。这两个方法也都接收第二个可选的参数，用于指定断言函数内部 this 的值。


const people = [
 {
 name: "Matt",
 age: 27
 },
 {
 name: "Nicholas",
 age: 29
 }
];
alert(people.find((element, index, array) => element.age < 28));
// {name: "Matt", age: 27}
alert(people.findIndex((element, index, array) => element.age < 28));
// 0


找到匹配项后，这两个方法都不再继续搜索。



const evens = [2, 4, 6];
// 找到匹配后，永远不会检查数组的最后一个元素
evens.find((element, index, array) => {
 console.log(element);
 console.log(index);
 console.log(array);
 return element === 4;
});
// 2
// 0
// [2, 4, 6]
// 4
// 1
// [2, 4, 6]




*/