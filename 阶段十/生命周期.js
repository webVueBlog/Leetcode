/**beforeCreate：创建前，此阶段为实例初始化之后，this指向创建的实例，此时的数据观察事件机制都未形成，不能获得DOM节点。
 * data，computed，watch，methods 上的方法和数据均不能访问。可以在这加个loading事件。
 * 
 * created：创建后，此阶段为实例已经创建，完成数据（data、props、computed）的初始化导入依赖项。
 * 可访问 data computed watch methods 上的方法和数据。
 * 初始化完成时的事件写在这里，异步请求也适宜在这里调用（请求不宜过多，避免白屏时间太长）。
 * 可以在这里结束loading事件，还做一些初始化，实现函数自执行。
 * 未挂载DOM，若在此阶段进行DOM操作一定要放在Vue.nextTick()的回调函数中。
 * 
 * beforeMount：挂载前，虽然得不到具体的DOM元素，但vue挂载的根节点已经创建，下面vue对DOM的操作将围绕这个根元素继续进行。
 * beforeMount这个阶段是过渡性的，一般一个项目只能用到一两次。
 * 
 * mounted：挂载，完成创建vm.$el，和双向绑定完成挂载DOM和渲染，可在mounted钩子函数中对挂载的DOM进行操作。可在这发起后端请求，拿回数据，配合路由钩子做一些事情。
 * 
 * beforeUpdate：数据更新前，数据驱动DOM。
 * 在数据更新后虽然没有立即更新数据，但是DOM中的数据会改变，这是vue双向数据绑定的作用。可在更新前访问现有的DOM，如手动移出添加的事件监听器。
 * 
 * updated：数据更新后，完成虚拟DOM的重新渲染和打补丁。组件DOM已完成更新，可执行依赖的DOM操作。注意：不要在此函数中操作数据（修改属性），会陷入死循环。
 * 
 * activated：在使用vue-router时有时需要使用<keep-alive></keep-alive>来缓存组件状态，这个时候created钩子就不会被重复调用了。
 * 如果我们的子组件需要在每次加载的时候进行某些操作，可以使用activated钩子触发。
 * deactivated：<keep-alive></keep-alive>组件被移除时使用。
 * 
 * beforeDestroy：销毁前，可做一些删除提示，如：您确定删除xx吗？
 * destroyed：销毁后，当前组件已被删除，销毁监听事件，组件、事件、子实例也被销毁。
这时组件已经没有了，无法操作里面的任何东西了。 */

/**. 父子组件的生命周期
 * 
 * 执行顺序：
 * 父组件开始执行到beforeMount 然后开始子组件执行，最后是父组件mounted。
 * 如果有兄弟组件，父组件开始执行到beforeMount，然后兄弟组件依次执行到beforeMount，然后按照顺序执行mounted，最后执行父组件的mounted。
 * 当子组件挂载完成后，父组件才会挂载。
 * 当子组件完成挂在后，父组件会主动执行一次beforeUpdated/updated钩子函数（仅首次）
 * 父子组件在data变化中是分别监控的，但是更新props中的数据是关联的。
 * 销毁父组件时，先将子组件销毁后才会销毁父组件。
 * 兄弟组件的初始化（mounted之前）是分开进行，挂载是从上到下依次进行
 * 当没有数据关联时，兄弟组件之间的更新和销毁是互不关联的
 */