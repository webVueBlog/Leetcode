/**

栈是一种后进先出（LIFO，Last-In-First-Out）的结构

数据项的插入（称为推入，push）和删除（称为弹出，pop）只在栈的一个地方发生，即栈顶。ECMAScript 数组提供了 push()和 pop()方法，以实现类似栈的行为。

push()方法接收任意数量的参数，并将它们添加到数组末尾，返回数组的最新长度。

pop()方法则用于删除数组的最后一项，同时减少数组的 length 值，返回被删除的项。

let colors = new Array(); // 创建一个数组
let count = colors.push("red", "green"); // 推入两项
alert(count); // 2 
count = colors.push("black"); // 再推入一项
alert(count); // 3 
let item = colors.pop(); // 取得最后一项
alert(item); // black 
alert(colors.length); // 2


let colors = ["red", "blue"]; 
colors.push("brown"); // 再添加一项
colors[3] = "black"; // 添加一项
alert(colors.length); // 4 
let item = colors.pop(); // 取得最后一项
alert(item); // black



*/