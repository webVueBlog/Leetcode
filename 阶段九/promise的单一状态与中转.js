let p1 = new Promise((resolve, reject) => {
    resolve('成功随风倒十分');
});

new Promise((resolve, reject) => {
    //状态一旦设置不会改变
    resolve(p1);
    reject('sfd');
}).then(
    (msg) => {
        console.log(msg);
    },
    (error) => {
        console.log(error);
    }
);

console.log('测试');

let p21 = new Promise((resolve, reject) => {
    resolve('fulfilled');
});

let p4 = p21.then(
    (value) => {
        return {
            then(resolve, reject) {
                resolve('套娃1');
            },
        };
    },
    (reason) => console.log(reason)
);

let p6 = p4.then((v) => {
    console.log(v);
    return {
        then(resolve, reject) {
            resolve('套娃2');
        },
    };
});

let p7 = p6.then((v) => {
    console.log(v);
});

// setTimeout(() => {
console.log(p21);
console.log(p4);
console.log(p6);
console.log(p7);
// });