//后面的then是对我返回的promise的处理
let p1 = new Promise((resolve, reject) => {
        resolve('fulfilled');
    })
    .then(
        (v) => {
            // console.log(v);
            // return v
            //如果返回的是promise
            return new Promise((resolve, reject) => {
                // resolve('fulfilled');
                // 这里不处理下面的then就会一直等待
                setTimeout(() => {
                    resolve('fulfilled');
                }, 4000);
            }).then((value) => {
                return value; //23行会接收到
            });
        },
        (r) => {
            console.log(r);
        }
    )
    .then((value) => {
        console.log(value);
    });