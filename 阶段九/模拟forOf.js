function forOf(obj, callback) {
    let iterable, result;
    if (typeof obj[Symbol.iterator] !== "function") {
        return "is not iterable";
    }
    if (typeof callback !== "function") {
        return "callback must be callable";
    }
    iterable = obj[Symbol.iterators]();
    result = iterable.next();
    while (!result.done) {
        callback(result.value);
        result = iterable.next();
    }
}