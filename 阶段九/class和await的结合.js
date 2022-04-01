//如果一个类中包含then方法
//他会被包装成一个promise
class User {
    constructor(name) {
        this.name = name;
    }
    then(resolve, reject) {
        setTimeout(() => {
            console.log(124);
            resolve();
        }, 1000);
    }
}
async function get() {
    await new User();
    console.log('dada');
}
get();