function User() { }
function Use13213r() { }
User.prototype.show = function () {  //这个是服务于函数实例化的
 console.log('添加了show方法');
};
Use13213r.__proto__.view = function () { //这个是服务于函数对象的
 console.log('添加了view方法');
};
let hd = new User();
hd.show();
Use13213r.view() //当普通对象用可以 
