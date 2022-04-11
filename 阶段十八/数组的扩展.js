/* 1.扩展运算符 ...*/
console.log(...[1, 2, 3]); //1 2 3

//4.字符串
[...
    'hello'
]
// [ "h", "e", "l", "l", "o" ]

//3.与解构赋值相结合 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
const [first, ...rest] = [1, 2, 3, 4, 5];

console.log(first, rest)

/** 扩展运算符的应用 */
//1.复制数组
const a1 = [1, 2];
const a2 = a1;

a2[0] = 2;
a1; // [2, 2]
//（2）合并数组
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];
[...arr1, ...arr2, ...arr3];

//5.实现了 Iterator 接口的对象
//任何定义了遍历器（Iterator）接口的对象，都可以用扩展运算符转为真正的数组。
//扩展运算符内部调用的是数据结构的 Iterator 接口，因此只要具有 Iterator 接口的对象，都可以使用扩展运算符，比如 Map 结构。

let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);

let arr = [...map.keys()]; // [1, 2, 3]


/**替代函数的apply方法 */
Function.prototype.testApply = function(context, arg) {
    if (typeof this !== 'function') return;
    context = context || window;
    arg = arg || [];

    context.fn = this;
    const result = context.fn(...arg);
    delete context.fn;
    return result;
};

function example(x, y, z) {
    console.log(x, y, z);
}
let arrDa = [1, 2, 3];
example.testApply(null, arrDa);
example(...arrDa);