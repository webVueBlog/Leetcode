// 传入的对象作为原型
function create(ojb) {
 // 构造函数
 function F() {}
 // 构造函数的原型 被 赋值为 传入的对象
 F.prototype = ojb
 // 返回新的对象实例
 return new F()
}
