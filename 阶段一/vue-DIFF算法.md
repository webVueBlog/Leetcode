## vue-DIFF算法

我们先根据真实DOM生成一颗virtualDOM，当virtualDOM某个节点的数据改变后会生成一个新的 Vnode，然后Vnode和oldVnode作对比，发现有不一样的地方就直接修改在真实的DOM上，然后使oldVnode的值为Vnode。

diff的过程就是调用名为patch的函数，比较新旧节点，一边比较一边给真实的DOM打补丁。diff算法比较新旧节点的时候，深度优先，同层比较。

当数据发生改变时，set方法会让调用 Dep.notify 通知所有订阅者Watcher，订阅者就会调用patch给真实的DOM打补丁，更新相应的视图。

patch函数接收两个参数oldVnode和Vnode分别代表新的节点和之前的旧节点，它只在初始化container和判断两节点是否值得比较的时候执行，如果两个节点都是一样的，那么就深入检查他们的子节点。

如果两个节点不一样那就说明Vnode完全被改变了，就可以直接替换oldVnode。通过 sameVnode （接收key）判断节点是否一样。

旧节点 和 新节点自身一样时，直接调用 patchVnode 去处理这两个节点

当我们确定两个节点值得比较之后我们会对两个节点指定patchVnode方法，找到对应的真实dom。

patchVnode经过以下步骤：

1. 判断 Vnode 和 oldVnode 是否指向同一个对象，
2. 如果是，那么直接 return 如果他们都有文本节点并且不相等，那么将 el 的文本节点设置为 Vnode 的文本节点。
3. 如果 oldVnode 有子节点而 Vnode 没有，则删除 el 的子节点
4. 如果 oldVnode 没有子节点而 Vnode 有，则将 Vnode 的子节点真实化之后添加到el，如果两者都有子节点，则执行 updateChildren 函数比较子节点，这一步很重要。

updateChildren 五种情况，diff算法的核心在这里，采用的是首尾比较。

1. 比较旧开始与新开始，如果相同则调用patchVnode对比更新dom，同时新老节点索引都加一，
2. 比较旧结束与新结束，如果相同则调用patchVnode对比更新dom，移动索引，同时索引都减一。
3. 比较旧开始与新结束节点，若相同对比更新DOM，将旧开始节点的真实DOM移到旧结束节点的DOM之后，同时旧节点索引加一，新节点索引减一，
4. 比较新开始与旧结束，若两者对比相同则更新DOM，将旧结束的真实DOM移动到旧开始节点的DOM之前。旧节点索引减一，新节点加一。
5. 如果以上四种情况都不满足，那说明没有相同的节点可以复用，于是通过查找事先建立好的以旧节点为key值，对应index序列为value的hash表，则在老节点中找与新开始节点具有相同key的节点，
如果两个对比成功则更新DOM，将老节点中被找到的DOM移到旧开始节点之前。
6. 如果在老节点中没有找到与新开始节点相同的key，则创建一个新开始节点DOM到旧节点开头。
7. 最后通过 节点开头大于节点尾部，来判断旧数组和新数组哪一个先遍历完成，如果新数组遍历完成，则证明旧数组还有多余节点，删除这些节点。如果旧数组先遍历完成，则证明新数组还有多余节点，在旧数组的开始和结尾更新这些节点。

diff算法的本质是找出两个对象之间的差异diff算法的核心是子节点数组对比,思路是通过首尾两端对比key的作用主要是决定节点是否可以复用 建立key-index的索引,主要是替代遍历，提升性能

key： 唯一标识，为了高效的更新虚拟DOM

transition过渡时，使用key属性，可以区分它们是否变化，否则vue只会替换其内部属性而不会触发过渡效果，添加key唯一标识后Diff算法就可以正确的识别此节点，找到正确的位置区插入新的节点。

key是为Vue中vnode的唯一标记，通过这个key，我们的diff操作可以更准确、更快速 更准确：因为带key就不是就地复用了，在sameVnode函数a.key === b.key对比中可以避免就地复用的情况。所以会更加准确。更快速：利用 key的唯一性生成map对象来获取对应节点，比遍历方式更快

```js
function patchVnode(oldVnode, vnode, parentElm) {
 // 属性改变
 patchArrt(oldVnode.arr, vnode.arr, parentElm);
 // 子节点改变
 patchChildren(parentElm, oldVnode.children, vnode.children);
}

function patchArrt(oldVnode = {}, vnode = {}, parentElm) {
 function each(obj, fn) {
  if (Object.prototype.toString.call(obj) !== "[object Object]") {
   return "只能遍历对象";
  }
  for (const key in obj) {
   if (obj.hasOwnProperty[key]) {
    let val = obj[key];
     fn(key, val);
   }
  }
 }
 each(oldVnode, (key, val) => {
  // 遍历 oldVnode 看 newTreeAttr 是否还有对应的属性
  if (vnode[key]) {
   // 如果有并且不相等的，修改对应的属性。
   val !== vnode[key] && setAttr(parentElm, key, vnode[key]);
  } else {
   // 没有的话，直接删除对应的属性
   parentElm.removeAttribute(key);
  }
 });
 
 function setAttr(node, key, value) {
  switch(key) {
   case "style":
    each(value, (key, val) => {
     node.style[key] = val;
    });
    break;
   case "value":
    var tag = node.tag || "";
    tag = tag.toLowerCase();
    if (tag === "input" || tag === "textarea") {
     node.value = value;
    } else {
     // if it is not a input or textarea, use 'setAttribute' to set
     // 如果新节点有属性，直接添加
     node.setAttribute(key, value);
    }
    break;
   default:
    node.setAttribute(key, value);
    break;
  }
 }
}
```

https://github.com/webVueBlog/Leetcode