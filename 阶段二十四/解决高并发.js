/**

 axios.all和axios.spread 这两个方法，这两个方法主要是为了执行多个并发请求

function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread((acct, perms) => {
    // 两个请求都完成后
  }));
  
本质：

axios.all方法接受一个数组作为参数，数组中的每个元素都是一个请求，返回一个promise对象，当数组中所有请求均已完成时，执行then方法。

在then方法中执行了 axios.spread 方法。该方法是接收一个函数作为参数，返回一个新的函数。接收的参数函数的参数是axios.all方法中每个请求返回的响应。

// axios.all的then
axios.spread((acct, perms) => {})

// Promise.all的then
([acct,perms]) => {}


*/