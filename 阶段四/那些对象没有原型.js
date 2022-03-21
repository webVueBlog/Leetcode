//Object.create(proto, [propertiesObject])
//方法创建一个新对象，使用现有的对象来提供新创建的对象的proto。
//proto : 必须。表示新建对象的原型对象

let da = { name: 'da' };

let hd = Object.create(null, {
 //完全创建的数据字典对象 没有原型
 name: {
  value: '撒比附件是',
 },
});

let hd111 = Object.create(da, {
 name: {
  value: '撒比附件是',
 },
});

console.log(hd); // [Object: null prototype] {}
console.log(da); // { name: 'da' }
console.log(da.hasOwnProperty('name')); //true
console.log(hd111.hasOwnProperty('name')); //true
console.log(hd.hasOwnProperty('name')); //报错


