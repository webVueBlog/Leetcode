// 我们的da使用
const Da = require("./da");
const app = new Da();

// app.use(ctx => {
//     ctx.body = 'hello dada.js'
// //   res.writeHead(200, {
// //     "Content-Type": "application/json"
// //   });

//   // res.statusCode = 200;
// //   res.end(JSON.stringify({ name: "jeskson" }));
// });

function delay() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove();
    }, 1000);
  });
}

app.use(async (ctx, next) => {
  ctx.body = "1";
  setTimeout(() => {
    ctx.body += "2";
  }, 2000);
  await next();
  ctx.body += "3";
});

app.use(async (ctx, next) => {
  ctx.body += "4";
  await delay();
  await next();
  ctx.body += "5";
});

app.use(async (ctx, next) => {
  ctx.body += "6";
});

app.listen(3000);

// const http = require("http");

// http
//   .createServer((req, res) => {
//     res.writeHead(200);
//     res.end("hi kaikeba");
//   })
//   .listen(3000);

// const Koa = require('koa')
// const app = new Koa()
// const {createReadStream} = require('fs')

// // 模块化/简化
// // 优雅api
// // 中间件机制
// app.use(async (ctx, next) => {
//     if (ctx.path === '/favicon.ico') {
//         ctx.body = createReadStream('./favicon.ico')
//     } else {
//         await next();
//     }
// })

// app.use(ctx => {
// ctx.body = 'hi kaikeba'
// })

// app.listen(3000);
