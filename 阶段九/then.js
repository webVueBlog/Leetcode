let func = function() {
    return new Promise((resolve, reject) => {
        resolve('返回值');
    });
};

let cb = function() {
    return '新的值';
};
// then方法提供一个供自定义的回调函数，若传入非函数，则会忽略当前then方法。
// 回调函数中会把上一个then中返回的值当做参数值供当前then方法调用。
// then方法执行完毕后需要返回一个新的值给下一个then调用（没有返回值默认使用undefined）。
// 每个then只可能使用前一个then的返回值。

func()
    .then(function() {
        return cb();
    })
    .then((resp) => {
        console.warn(resp);
        console.warn('1 =========<');
    });

func()
    .then(function() {
        //没有return值，定义中讲过若then没有返回值，提供给下一个then使用的参数就是undefined
        cb();
    })
    .then((resp) => {
        console.warn(resp);
        console.warn('2 =========<');
    });

func()
    .then(
        //then中cb()执行后返回的并不是一个函数，在Promise规范中会自动忽略调当前then，所以会把func中的返回值供下一个then使用，输出了“返回值”
        cb()
    )
    .then((resp) => {
        console.warn(resp);
        console.warn('3 =========<');
    });

func()
    .then(
        //直接把cb当做回调
        cb
    )
    .then((resp) => {
        console.warn(resp);
        console.warn('4 =========<');
    });