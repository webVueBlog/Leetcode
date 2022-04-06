/**

Date 类型将日期保存为自协调世界时（UTC，Universal Time Coordinated）时间 1970 年 1 月 1 日午夜（零时）至今所经过的毫秒数。

console.log(new Date());
VM260:1 xx xx xx xxxx xx:xx:xx GMT+0800 (中国标准时间)

要创建日期对象，就使用 new 操作符来调用 Date 构造函数：
let now = new Date();

在不给 Date 构造函数传参数的情况下，创建的对象将保存当前日期和时间。

两个辅助方法：Date.parse()和 Date.UTC()。 必须传入其毫秒表示

Date.parse()方法接收一个表示日期的字符串参数，尝试将这个字符串转换为表示该日期的毫秒数。

支持下列日期格式：

“月/日/年”，如"5/23/2019"；

“月名 日, 年”，如"May 23, 2019"；

“周几 月名 日 年 时:分:秒 时区”，如"Tue May 23 2019 00:00:00 GMT-0700"；

ISO 8601 扩展格式“YYYY-MM-DDTHH:mm:ss.sssZ”，如 2019-05-23T00:00:00（只适用于兼容 ES5 的实现）。

let someDate = new Date(Date.parse("May 23, 2019"));

如果传给 Date.parse()的字符串并不表示日期，则该方法会返回 NaN。

let someDate = new Date("May 23, 2019");

Date.UTC()方法也返回日期的毫秒表示，但使用的是跟 Date.parse()不同的信息来生成这个值。传给 Date.UTC()的参数是年、零起点月数（1 月是 0，2 月是 1，以此类推）、日（1~31）、时（0~23）、分、秒和毫秒。

这些参数中，只有前两个（年和月）是必需的。如果不提供日，那么默认为 1 日。其他参数的默认值都是 0。

// GMT 时间 2000 年 1 月 1 日零点
let y2k = new Date(Date.UTC(2000, 0));
// GMT 时间 2005 年 5 月 5 日下午 5 点 55 分 55 秒
let allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));

let y2k = new Date(Date.UTC(2000, 0));
console.log(y2k);
VM432:3 Sat Jan 01 2000 08:00:00 GMT+0800 (中国标准时间)


// 本地时间 2000 年 1 月 1 日零点
let y2k = new Date(2000, 0);
console.log(y2k);
VM510:3 Sat Jan 01 2000 00:00:00 GMT+0800 (中国标准时间)

// 本地时间 2000 年 1 月 1 日零点
let y2k = new Date(2000, 0);
// 本地时间 2005 年 5 月 5 日下午 5 点 55 分 55 秒
let allFives = new Date(2005, 4, 5, 17, 55, 55);


Date.now()方法，返回表示方法执行时日期和时间的毫秒数。

// 起始时间
let start = Date.now();
// 调用函数
doSomething();
// 结束时间
let stop = Date.now(),
result = stop - start; 


*/