function Web(url) {
 this.url = url; //动态属性
}

Web.url = '1024bibi.com'; //静态属性
let hd = new Web('1024bat.cn');

console.log(hd.url); // 1024bat.cn
console.log(Web.url); // 1024bibi.com
console.log(hd); // Web { url: '1024bat.cn' }
console.log(Web); // [Function: Web] { url: '1024bibi.com' }

class User {
 host = 'sssssss';
}

let HD1 = new User();
let HD2 = new User();
HD2.host = 'HD2.host';

console.log(HD1.host); //sssssss
console.log(HD2.host); //HD2.host


class User1 {
 //静态属性即为类设置属性，而不是为生成的对象设置，下面是原理实现
 //在 class 中为属性添加 static 关键字即声明为静态属性
 //如果属性是为所有对象共用的 不是为某一对象使用 可以定义为静态属性
 static host = 'HD3.host';
 getHost() {
  return User1.host
 }
}

let HD3 = new User1();
console.log(HD3.host); //undefined
console.log(User1.host); //HD3.host
console.log(HD3.getHost());  //HD3.host
