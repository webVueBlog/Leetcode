// 不能拷贝函数

var arr = ["old", 1, true, ["old1", "old2"], { old: 1 }];

var new_arr = JSON.parse(JSON.stringify(arr));

console.log(new_arr);
// [ 'old', 1, true, [ 'old1', 'old2' ], { old: 1 } ]

// 深拷贝的实现

var deepCopy = function (obj) {
 // 如果 obj 的类型不是对象就 return 掉
 if (typeof obj !== 'object') return;
 // 判断实例是 数据 还是 对象
 var newObj = obj instanceof Array ? [] : {}
 for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
   // 遍历属性 判断 Obj[key] 是否是对象 而进入递归
   newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
  }
 }
 // 一直循环;
 return newObj;
};

let obj = [1, { obj: { name: 'dada' } }, { obj: 1 }];
let list = obj.map((value) => {
 // 数组遍历
 return value;
});

console.log(list) // [ 1, { obj: { name: 'dada' } }, { obj: 1 } ]

list[1].obj.name = 'newDa';
console.log(list) // [ 1, { obj: { name: 'newDa' } }, { obj: 1 } ]
console.log(obj) // [ 1, { obj: { name: 'newDa' } }, { obj: 1 } ]

var a = deepCopy({ obj: { name: 'newDa' } });
console.log(a); // { obj: { name: 'newDa' } }

var b = deepCopy(list);
console.log(b); // [ 1, { obj: { name: 'newDa' } }, { obj: 1 } ]

var c = deepCopy(obj);
console.log(c); // [ 1, { obj: { name: 'newDa' } }, { obj: 1 } ]


