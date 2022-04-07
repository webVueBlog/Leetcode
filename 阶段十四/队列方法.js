/**

队列以先进先出（FIFO，First-In-First-Out）形式限制访问。队列在列表末尾添加数据，但从列表开头获取数据。

使用 shift()和 push()，可以把数组当成队列来使用

let colors = new Array(); // 创建一个数组
let count = colors.push("red", "green"); // 推入两项
alert(count); // 2 
count = colors.push("black"); // 再推入一项
alert(count); // 3 
let item = colors.shift(); // 取得第一项
alert(item); // red 
alert(colors.length); // 2

通过使用 unshift()和 pop()，可以在相反方向上模拟队列
*/