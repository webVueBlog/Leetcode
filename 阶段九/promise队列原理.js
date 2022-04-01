//下个promise得等上一个promise完成再走 按顺序执行promise任务
let promise = Promise.resolve('dada');
promise
    .then((v) => {
        console.log(v);
        return {
            then(resolve, reject) {
                setTimeout(() => {
                    resolve('我也返回一个成功的状态');
                }, 2000);
            },
        };
    })
    .then((v) => {
        console.log(v);
    });