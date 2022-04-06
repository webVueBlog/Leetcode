/**

Date 类型重写了 toLocaleString()、toString()和 valueOf()方法

Date 类型的 toLocaleString()方法返回与浏览器运行的本地环境一致的日期和时间。这通常意味着格式中包含针对时间的 AM（上午）或 PM（下午），但不包含时区信息（具体格式可能因浏览器而不同）。toString()方法通常返回带时区信息的日期和时间，而时间也是以 24 小时制（0~23）表示的。


toLocaleString() - 2/1/2019 12:00:00 AM
toString() - Thu Feb 1 2019 00:00:00 GMT-0800 (Pacific Standard Time)

toLocaleString()和 toString()可能只对调试有用，不能用于显示。

Date 类型的 valueOf()方法根本就不返回字符串，这个方法被重写后返回的是日期的毫秒表示。

let date1 = new Date(2019, 0, 1); // 2019 年 1 月 1 日
let date2 = new Date(2019, 1, 1); // 2019 年 2 月 1 日
console.log(date1);
console.log(date2);
VM787:3 Tue Jan 01 2019 00:00:00 GMT+0800 (中国标准时间)
VM787:4 Fri Feb 01 2019 00:00:00 GMT+0800 (中国标准时间)
undefined
console.log(date1 < date2); // true
console.log(date1 > date2); // false
VM791:1 true
VM791:2 false

*/