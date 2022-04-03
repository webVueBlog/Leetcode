/**使用location.href='/url'来跳转，简单方便，但是刷新了页面；
使用history.pushState('/url')，无刷新页面，静态跳转；
引进router，然后使用router.push('/url')来跳转，使用了diff算法，实现了按需加载，减少了dom的消耗。
其实使用router跳转和使用history.pushState()没什么差别的，因为vue-router就是用了history.pushState()，尤其是在history模式下。 */