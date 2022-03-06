## vue双向绑定弊端set实现

大概流程就是：

1. 判断目标值是否为有效值，不是有效值直接停止
2. 判断是否为数组，并且key值是否为有效的key值,如果是数组，就选择数组的长度和key值取较大值作为数组的新的length值，并且替换目标值splice方法，重写了，所以执行splice，会双向数据绑定
3. 判断目标值是否为响应式的__ob__ ,如果是vue实例，直接不行,如果不是响应式的数据，就是普通的修改对象操作,如果是响应式数据，那就通过Object.defineProperty进行数据劫持
4. 通知dom更新

```js
export function set(target, key, val) {
 if (
  process.env.NODE_ENV !== 'production' &&
  (isUndef(target) || isPrimitive(target))
 ) {
  warn(
   `Cannot set reactive property on undefined, null, or primitive value: ${target}`
  );
 }
// 判断目标值是否为数组，并且key值是否为有效的数组索引
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    // 对比数组的key值和数组长度，取较大值设置为数组的长度
    target.length = Math.max(target.length, key); // 替换目标值
    target.splice(key, 1, val);
    return val;
  }
  // 如果目标值是对象，并且key值是目标值存在的有效key值，并且不是原型上的key值
  if (key in target && !(key in Object.prototype)) {
    // 直接更改目标值
    target[key] = val;
    return val;
  }
  const ob = target.__ob__; // 判断目标值是否为响应式的
  if (target._isVue || (ob && ob.vmCount)) {
    // 如果是vue根实例，就警告
    process.env.NODE_ENV !== 'production' &&
      warn(
        'Avoid adding reactive properties to a Vue instance or its root $data ' +
          'at runtime - declare it upfront in the data option.'
      );
    return val;
  }
  if (!ob) {
    // 如果目标值不是响应式的，那么值需要给对应的key赋值
    target[key] = val;
    return val;
  }
  // 其他情况，目标值是响应式的，就通过Object.defineProperty进行数据监听
  defineReactive(ob.value, key, val); // 通知更新dom操作
  ob.dep.notify();
  return val;
}

vm.$set(vm.items, indexOfItem, newValue);
this.$set(this.someObject, 'b', 2);
```

https://github.com/webVueBlog/Leetcode