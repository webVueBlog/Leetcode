/**

对于引用值而言，可以随时添加、修改和删除其属性和方法。

let person = new Object(); 
person.name = "Nicholas"; 
console.log(person.name); // "Nicholas"

原始值不能有属性，尽管尝试给原始值添加属性不会报错。

let name = "Nicholas"; 
name.age = 27; 
console.log(name.age); // undefined


let name1 = "Nicholas"; 
let name2 = new String("Matt"); 
name1.age = 27; 
name2.age = 26; 
console.log(name1.age); // undefined 
console.log(name2.age); // 26 
console.log(typeof name1); // string 
console.log(typeof name2); // object

*/