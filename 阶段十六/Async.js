/**
使用 ES2017 中的 Async(异步) 函数 和 Await(等待)

ES2017 在 6 月最终敲定了，随之而来的是广泛的支持了我最喜欢的最喜欢的JavaScript功能： async(异步) 函数。如果你也曾为异步 Javascript 而头疼，那么这个就是为你设计的。如果你没有的话，那么你有可能是个天才。

Async(异步) 函数或多或少允许你编写顺序的 JavaScript 代码，而无需将所有逻辑包装在 callbacks(回调)，generators(生成器) 或 promises 中。

JavaScript 代码:
function logger() {
    let data = fetch('http://xx.com/posts')
    console.log(data)
}
 
logger()

这段代码没有按照你的预期执行。如果你写过 JS 的话，你可能知道上面的代码为什么不会按预期运行。

但是这个代码确实做了你所期望的。

JavaScript 代码:
async function logger() {
    let data = await fetch('http:xx.com/posts')
    console.log(data)
}
 
logger()

回调是一个函数，可以将结果传递给函数并在该函数内进行调用，以响应任何事件。 这是JS的基础。

JavaScript 代码:
function readFile('file.txt', (data) => {
  // 回调函数内部
  console.log(data)
}

这个函数只是简单的从一个文件记录数据，在文件完成之前进行读取是不可能的。看起来很简单，但是如果你想按顺序读取和记录五个不同的文件怎么办？

在 Promises 出现之前，为了执行顺序任务，你需要嵌套回调，如下所示：

JavaScript 代码:

// 这就是标准的回调地狱
function combineFiles(file1, file2, file3, printFileCallBack) {
    let newFileText = ''
    readFile(string1, (text) => {
        newFileText += text
        readFile(string2, (text) => {
            newFileText += text
            readFile(string3, (text) => {
                newFileText += text
                printFileCallBack(newFileText)
            }
        }
    } 
}


Promise 只是让回调显得比较简单和更加直观。

 Async ／ Await


async function logger() {
  // 暂停直到获取到返回数据
  let data = await fetch('http://sampleapi.com/posts')
  console.log(data)
}

另一个好处就是可以使用 promise 不能使用的 try 和 catch ：

JavaScript 代码:

async function logger ()  {
    try {
        let user_id = await fetch('/api/users/username')
        let posts = await fetch('/api/`${user_id}`')
        let object = JSON.parse(user.posts.toString())
        console.log(posts)
    } catch (error) {
        console.error('Error:', error) 
    }
}

async 和 await 基于 promise 的。 使用 async 的函数将会始终返回一个 promise 对象。 这一点很重要，要记住，这可能是你遇到的容易犯错的地。
在使用 await 的时候我们暂停了函数，而非整段代码。
async 和 await 是非阻塞的。
你仍然可以使用 Promise 例如 Promise.all()。

await 只能用于被声明为 async 的函数。

因此，不能在全局范围内使用 await。


JavaScript 代码:
// 抛出异常
function logger (callBack) {
    console.log(await callBack)
}
 
// 正常工作
async function logger () {
    console.log(await callBack)
}

*/