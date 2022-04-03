/**当你把一个普通的 JavaScript 对象传给 Vue 实例的 data 选项，
 * Vue 将遍历此对象所有的属性，并使用 Object.defineProperty 把这些属性全部转为 getter/setter。
 * 在内部它们让 Vue 能够追踪依赖，在属性被访问和修改时通知变更。所以属性必须在 data 对象上存在才能让 Vue 将它转换为响应式的，
 * Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。
 * 这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。
 * Vue 在内部对异步队列尝试使用原生的 Promise.then，MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。
 * 每个组件实例都有相应的 watcher 实例对象，它会在组件渲染的过程中把属性记录为依赖，
 * 之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新。 */