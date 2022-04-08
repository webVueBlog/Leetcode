/**

数组有两个方法可以用来对元素重新排序：reverse()和 sort()。

reverse()方法就是将数组元素反向排列。

let values = [1, 2, 3, 4, 5];
values.reverse();
alert(values); // 5,4,3,2,1

sort()会按照升序重新排列数组元素，即最小的值在前面，最大的值在后面

sort()会在每一项上调用 String()转型函数

let values = [0, 1, 5, 10, 15];
values.sort();
alert(values); // 0,1,10,15,5 

sort()方法可以接收一个比较函数，用于判断哪个值应该排在前面。

function compare(value1, value2) {
 if (value1 < value2) {
 return -1;
 } else if (value1 > value2) {
 return 1;
 } else {
 return 0;
 }
} 


let values = [0, 1, 5, 10, 15];
values.sort(compare);
alert(values); // 0,1,5,10,15

降序效果

let values = [0, 1, 5, 10, 15];
values.sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
alert(values); // 15,10,5,1,0

注意 reverse()和 sort()都返回调用它们的数组的引用。

*/