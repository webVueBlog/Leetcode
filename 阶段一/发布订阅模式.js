
// 发布-订阅模式其实是对象间一对多的关系（利用消息队列）
// 当一个对象的状态发生改变时，所有依赖于它的对象都将得到状态改变的通知
// 订阅者把自己想订阅的事件注册到调度中心
// 当发布者发布该事件到调度中心，也就是该事件触发时，由调度中心统一调度。
// 由调度中心统一调度订阅者注册到该调度中心的处理代码

class Observer {
 constructor() {
  this.message = {};
 }
 // 添加订阅者
 on(type, fn) {
  if (!this.message[type]) {
   this.message[type] = []
  }
  this.message[type].push(fn);
 }
 // 删除订阅
 off(type, fn) {
  if (!this.message.hasOwnProperty(type)) return;
  if (!fn) {
   this.message[type] = undefined;
   return;
  }
  this.message[type] = this.message[type].filter((item) => item !== fn)
 }
 // 发布消息
 emit(type) {
  if (!this.message[type]) return;
  this.message[type].forEach((item) => {
   item();
  });
 }
}

// 使用构造函数创建实例
const person1 = new Observer();
person1.on("js", handlerA);
person1.on("红宝书", handlerB);
person1.on("红宝书", handlerC);
function handlerA() {console.log("handlerA");}
function handlerB() {console.log("handlerB执行");}
function handlerC() {console.log("handlerC");}
person1.emit("红宝书");
    
