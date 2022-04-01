/**
 * 表示从当前原型中执行方法，
 * super 一直指向当前对象
 * 下面是使用 this 模拟super，会有以下问题
 * 但this指向当前对象，结果并不是 admin的name值 */

/**
 * 当super 作为函数调用时, 
 * 它代表的指向的是父类的构造函数,
 * 在子类的构造函数必须执行一次 super 函数
 * super虽然代表了父类 A 的构造函数,
 * 但是返回的是子类 B 的实例
 * 即 super 内部的 this 指的是 B 的实例
 */

/**
 * super作为对象使用时，分为在普通方法中使用和在静态方法中使用
 * super 在静态方法之中指向父类，在普通方法之中指向父类的原型对象
 * 普通方法使用:super指向父类的原型,
 * 即A.prototype,可以访问到原型上的方法和属性,也就是指向它父类的原型对象
 * super.parent() // 父类的普通方法
 * 等价于Animal.prototype.parent() 父类的普通方法
 * 由于 super 指向父类的原型对象, 
 * 所以定义在父类实例上的方法或属性, 是无法通过super 调用的
 */

/**
 * 如果用在静态方法之中
 * 如果 super作为对象,用在静态方法之中,这时super将指向父类 , 而不是父类的原型对象
 * 在子类的静态方法中通过 super 调用父类的方法时，
 * 方法内部的 this 指向当前的子类而不是子类的实例
 */
let user = {
    name: 'user',
    show: function() {
        return this.name;
    },
};
let admin = {
    __proto__: user,
    name: 'admin',
    show() {
        return this.__proto__.show();
    },
};
console.log(admin.show()); //user

/**为了解决以上问题，需要调用父类方法时传递this */

let user1 = {
    name: 'user',
    show: function() {
        return this.name;
    },
};

let admin1 = {
    __proto__: user1,
    name: 'admin1',
    show1() {
        return this.__proto__.show.bind(this);
    },
};
console.log(admin1.show1()()); //admin1

/**使用 super 调用时，在所有继承中 this 始终为调用对象
 * super 是用来查找当前对象的原型，而不像上面使用 this 查找原型造成死循环
 * 也就是说把查询原型方法的事情交给了 super，this 只是单纯的调用对象在各个继承中使用
 * super 只能在类或对象的方法中使用，而不能在函数中使用 */