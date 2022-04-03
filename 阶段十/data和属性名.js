function initState(vm) {
    vm._watchers = [];
    var opts = vm.$options;
    if (opts.props) { initProps(vm, opts.props); }
    if (opts.methods) { initMethods(vm, opts.methods); }
    if (opts.data) {
        initData(vm);
    } else {
        observe(vm._data = {}, true /* asRootData */ );
    }
    if (opts.computed) { initComputed(vm, opts.computed); }
    if (opts.watch && opts.watch !== nativeWatch) {
        initWatch(vm, opts.watch);
    }
}
// 以上为vue的部分源码，可以看出判断顺序：
// props > methods > data > computed > watch

// if (methods && hasOwn(methods, key)) { warn( Method “${key}” has already been defined as a data property., vm ) }
// 会取出 methods 中的方法进行判断，也就是 hasOwn(methods, key)
// 因为不管是计算属性还是data还是props 都会被挂载在vm实例上，因此 这三个都不能同名
/**因为JavaScript的特性所导致，在component中，data必须以函数的形式存在，不可以是对象。
  组建中的data写成一个函数，数据以函数返回值的形式定义，这样每次复用组件的时候，都会返回一份新的data，
相当于每个组件实例都有自己私有的数据空间，它们只负责各自维护的数据，不会造成混乱。而单纯的写成对象形式，就是所有的组件实例共用了一个data，这样改一个全都改了。 */