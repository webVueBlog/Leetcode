/**
 * 使用访问器可以管控属性，有效的防止属性随意修改
 * 
 * 访问器就是在 函数前加上 get/set 修饰，操作属性时 不需要加函数的扩号， 直接用函数名
 */

class User {
 constructor(name) {
  this.data = { name };
 }
 get name() {
  return this.data.name
 }
 set name(value) {
  if (value.trim() == '') throw new Error('invalid params')
  this.data.name = value
 }
}

let p = new User('da');
console.log(p) // User { data: { name: 'da' } }
p.name = 'jj';
console.log(p.name) // jj
