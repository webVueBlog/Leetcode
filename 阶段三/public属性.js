// public 指不受保护的属性，在类的内部和外部都可以访问到

class User {
 url = 'xxx.com';
 constructor(name) {
  this.name = name
 }
}

let p = new User('da');

console.log(p.name, p.url) // da xxx.com