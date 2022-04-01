class User {
    async get(name) {
        return setTimeout(() => {
            console.log(name + "dada");
        }, 1000);
    }
}
new User().get('da').then(user => {
    console.log(user);
})