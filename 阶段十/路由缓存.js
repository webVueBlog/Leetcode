/**keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。
 * props
 * include - 字符串或正则表达，只有匹配的组件会被缓存
 * exclude - 字符串或正则表达式，任何匹配的组件都不会被缓存
 * 增加router.meta属性
 */
//可以在路由meta中加入参数, 对打开的路由进行keep-alive的判断, 通过钩子active等