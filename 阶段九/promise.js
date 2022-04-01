class Promise {
    static PENDING = "pending";
    static FULFILLED = "fulfilled";
    static REJECTED = "rejected";
    constructor(executor) {
        this.status = Promise.PENDING;
        executor(this.resolve.bind(this), this.reject.bind(this));
    }
    resolve(value) {
        this.value = value;
        this.status = Promise.FULFILLED;
    }
    reject(value) {
        this.value = value;
        this.status = Promise.REJECTED;
    }
    then(onFulfilled, onRejected) {

    }
}

let promise = new Promise((resolve, reject) => {
    resolve(123);
});