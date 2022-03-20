function Person(name, friends) {
 this.name = name;
 this.friends = ['a', 'b'];
 let name1 = 1
 show = function () {
  
 }
}

let p1 = new Person('da');
let p2 = new Person('li');

console.log(Person.prototype); // {}

p1.friends.push('c');

console.log(p1); // Person { name: 'da', friends: [ 'a', 'b', 'c' ] }

console.log(p1.friends) // [ 'a', 'b', 'c' ]
console.log(p2.friends) // [ 'a', 'b' ]