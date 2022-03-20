/**
 * 使用 watch 监听
 * 
 * watch: {
 *  $route(to, from) {
 *   if(to != from) {
 *    console.log("监听到路由变化，做出响应的处理");
 *   }
 *  }
 * }
 */

// 向 router-view 组件中添加key

// <router-view :key="$route.fullPath"></router-view>
