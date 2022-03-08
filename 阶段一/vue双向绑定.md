
vue双向绑定

对象有两种属性：（1）数据属性，就是我们经常使用的属性 （2）访问器属性，也称存取器属性 存取器属性就是一组获取和设置值的函数

Vue是采用数据劫持和发布者订阅者模式 双向绑定里面有三个角色

observe，compile，watcher

observe：劫持所有的属性，对每个vue里面的data中定义的属性循环，通过object.defineProperty()来劫持各个属性的getter

setter，在数据发生变动时告诉订阅者，订阅者就会触发自己的update方法，对视图进行更新

在vue中每当有用到双向绑定的指令，就在一个Dep中增加一个订阅者，其订阅者只是更新自己的指令对应的数据，每当属性的set方法触发，就循环更新Dep中的订阅者。就是observe一旦有了set触发，就会通知到Dep

Dep负责维护依赖，而订阅者来自compile，一旦数据变动，就会通过Watcher绑定更新函数，此时Watcher也向Dep中添加了订阅者，一旦Dep接到Observe的通知，
他就会再去通知Watcher,Watcher就会调用自身的update方法，并触发compile中绑定的回调，触发更新

双向绑定里面有三个角色 observe，compile，watcher

1. observe 会为vue里面每个data属性通过object.defineProperty()，来劫持各个属性的getter，setter，为每个属性分配一个订阅者集合的管理数组Dep
2. compile 主要做的事情是解析模板指令，将模板中的变量替换成数据，他会在初始化的时候渲染视图，以及将每个指令对应的节点绑定更新函数，添加监听数据给订阅者
3. watcher 是compile和observe沟通的桥梁，Dep负责维护依赖，而订阅者则来自于compile，一旦有数据变动，则会通过Watcher绑定更新函数，
此时Watcher也向Dep中添加了订阅者，一旦Dep接到Observer的通知，它就会再去通知Watcher，Watcher则会调用自身的update()方法，并触发Compile中绑定的回调，更新视图；





