function curry() {
    let fn = Array.prototype.shift.call(arguments);
    let args = arguments;
    return function() {
        let boundArg = [...args];
        boundArg.push(...arguments);
        if (boundArg.length < fn.length) {
            return curry.apply(this, [fn, ...boundArg]);
        } else {
            return fn.apply(this, boundArg);
        }
    };
}

function sum(a, b, c, d, e) {
    return a + b + c + d + e;
}
let addCurry = curry(sum, 1);