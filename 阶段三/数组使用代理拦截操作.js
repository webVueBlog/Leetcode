const lessons = [
 {
  name: 'a',
  age: 1
 },
 {
  name: 'b',
  age: 2
 }
];

let proxy = new Proxy(lessons, {
 get(array, key) {
  console.log(array[key]);
  // const title = array[key].name;
  // console.log(title);
 },
 set(array, key, value) {

 }
})

proxy[2];
proxy.name = 'dada'

function Da() { return 1 }
console.log(Da());

// undefined
// 1