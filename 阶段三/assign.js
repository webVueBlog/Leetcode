const target = { a: 1 };
const source1 = { b: 2, a: 3 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);

console.log(target); // { a: 3, b: 2, c: 3 }
//如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
//Object.assign()方法实行的是浅拷贝，而不是深拷贝。

//也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。