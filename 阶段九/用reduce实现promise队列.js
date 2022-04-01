function reduceList(list) {
    list.reduce((promise, currentValue) => {
        // promise 初始值,或者计算结果后的返回值
        return Promise.then(() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(currentValue);
                    resolve();
                }, 1000);
            });
        });
    }, Promise.resolve());
}

reduceList([1, 2, 3, 4, 5]);