function Da(name, age) {
    this.name = name;
    this.age = age;
    return null;
}

Da.prototype.strange = 20;
Da.prototype.show = function() {
    console.log(this.name);
}

function NewDemo() {
    let obj = {};
    let constructor = [].shift.call(arguments);
    obj.__proto__ = constructor.prototype;
    // 改变构造函数指向 obj可以访问到构造函数中的属性
    const result = constructor.apply(obj, arguments);
    return typeof result === 'object' ? result || obj : obj;
}

let newChild = NewDemo(Da, 'da', 11);