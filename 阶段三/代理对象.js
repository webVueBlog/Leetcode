// Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。 const p = new Proxy(target, handler)

const obj = { name: 'da' };
const proxy = new Proxy(obj, {
 get(obj, property) {
  return obj[property];
 },
 set(obj, property, value) {
  obj[property] = value;
  // 在严格模式下设置要返回 true
  return true
 }
});

console.log(proxy); // { name: 'da' }
proxy.name = 'hh'; // 修改
console.log(proxy); // { name: 'hh' }