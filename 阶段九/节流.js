function throttle(func, wait) {
    let flag = true;
    return function() {
        if (!flag) {
            return
        }
        flag = false
        setTimeout(() => {
            func.apply(this, arguments)
            flag = true
        }, wait)
    }
}