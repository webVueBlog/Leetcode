function timeout(delay = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}

timeout(2000).then(() => {
    console.log('两秒第一');
    return timeout(2000)
}).then(v => {
    console.log('四秒第二');
})