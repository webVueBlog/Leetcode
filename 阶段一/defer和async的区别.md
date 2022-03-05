## defer和async的区别

DOMContentLoaded 事件的触发既可能在 async 脚本执行前、又可能在 async 脚本执行后呢？这是因为，async 标签的脚本加载完毕的时间有两种情况：

1. HTML 还没有被解析完的时候，async 脚本已经加载完了，那么 HTML 停止解析，去执行脚本，脚本执行完毕后触发 DOMContentLoaded 事件。
2. HTML 解析完了之后， async 脚本才加载完，然后再执行脚本，那么在 HTML 解析完毕、async 脚本还没加载完 的时候就触发 DOMContentLoaded 事件。

DOMContentLoaded 事件只关注 HTML 是否被解析完，而不关注 async 脚本.

如果 script 标签中包含 defer，那么这一块脚本将不会影响 HTML 文档的解析，而是 等到 HTML 解析完成后才会执行。而 DOMContentLoaded 只有在 defer 脚本执行结束后才会被触发。

1. HTML 还没解析完成时，defer脚本已经加载完毕、那么 defer 脚本将等待 HTML 解析完成后再执行。defer脚本执行完毕后触发 DOMContentLoaded事件。
2. HTML 解析完成时， defer脚本还没加载完毕，那么defer脚本继续加载，加载完毕后直接执行，执行完毕后触发 DOMContentLoaded 事件。

1. 没有 defer 或 async ，浏览器会立即加载并执行指定的脚本，“立即” 指的是在渲染该 script 标签之下的文档元素 之前，也就是说不等待后续载入的文档元素，读到就加载并执行。
2. 有 async，加载和渲染后续文档元素的过程将和 script.js 的加载与执行 并行进行（异步）。
3. 有 defer，加载后续文档元素的过程将和 script.js 的加载并行进行 （异步），但是 script.js 的执行要在 ”所有" 元素解析完成之后， DOMContentLoaded 事件触发之前完成。 dom - defer - DOMContentLoaded

defer 和 async 在网络读取（下载）这块儿是一样的，都是异步的（相较于 HTML 解析）

defer 和 async 的差别在于 脚本下载完成后 何时执行，显然 defer 是最接近我们对于 “应用脚本加载 和 脚本执行”的要求的

defer 是按照加载顺序执行脚本的

async 则是乱序执行的主，对它来说脚本的加载 和 执行 是紧紧挨着的，所以不管你声明的顺序如何，它只要加载完了就会 立即执行

不依赖任何脚本 或者 不被任何脚本依赖的脚本 适合async

https://github.com/webVueBlog/Leetcode