let name1 = 'da';
let name2 = 'da';
//不需要对外操作和访问的属性使用Symbol来定义
let grade = {
    [name1]: {
        a: 100,
        b: 50,
    },
    [name2]: {
        a: 75,
        b: 65,
    },
};

console.log(grade, '如果遇到同名只返回最后一个，后面覆盖前面');
// { da: { a: 75, b: 65 } } 如果遇到同名只返回最后一个，后面覆盖前面

let name3 = {
    name: 'da',
    key: Symbol('da'),
};
let name4 = {
    name: 'da',
    key: Symbol('da'),
};
let grade1 = {
    [name3.key]: {
        a: 100,
        b: 50,
    },
    [name4.key]: {
        a: 75,
        b: 65,
    },
};
console.log(grade1);
// { [Symbol(da)]: { a: 100, b: 50 }, [Symbol(da)]: { a: 75, b: 65 } }