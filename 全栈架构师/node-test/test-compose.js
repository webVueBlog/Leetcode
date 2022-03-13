function add(x, y) {
  return x + y;
}

function square(z) {
  return z * z;
}
function double(x) {
  return x * 2;
}
// 复合函数
// function compose(mids) {
//   return mids.reduce((leftFn, rightFn) => (...args) =>
//     rightFn(leftFn(...args))
//   );
// }

// const ret = square(add(1,2))
// console.log(ret)

// const middwares = [add, square, double];
// let retFn = compose(middwares)
// console.log(retFn(1,2)) // 18

function compose(middlewares) {
    return function() {
      return dispatch(0);
      // 执行第0个
      function dispatch(i) {
        let fn = middlewares[i];
        if (!fn) {
          return Promise.resolve();
        }
        return Promise.resolve(
          fn(function next() {
            // promise完成后，再执行下一个
            return dispatch(i + 1);
          })
        );
      }
    };
  }


//   fn1
//   fn2 2s
//   delay
//   fn3
//   end fn2
//   end fn1


  async function fn1(next) {
    console.log("fn1");
    await next();
    console.log("end fn1");
  }
  
  async function fn2(next) {
    console.log("fn2");
    await delay();
    await next();
    console.log("end fn2");
  }
  
  function fn3(next) {
    console.log("fn3");
  }
  
  function delay() {
    return new Promise((reslove, reject) => {
      setTimeout(() => {
        console.log("delay");
        reslove();
      }, 2000);
    });
  }
  
  const middlewares = [fn1, fn2, fn3];
  const finalFn = compose(middlewares);
  finalFn(); // ?