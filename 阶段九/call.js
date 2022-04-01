let obj = {
    name: 'da',
};

function showName(age) {
    console.log(this.name);
    console.log(age);
}

Function.prototype.CallDemo = function(obj, ...arg) {
    if (typeof this !== 'function') {
        throw error;
    }
    obj.fn = this;
    const result = obj.fn(...arg);
    delete obj.fn;
    return result;;
}
showName.CallDemo(obj, 10);