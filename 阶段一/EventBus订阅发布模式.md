
eventBus它的工作原理是发布/订阅方法，通常称为 Pub/Sub

因为vue是单页面应用，在某个页面刷新之后，与之相关的EventBus会被移除，这样就导致业务走不下去，还有如果业务有反复操作的页面，
eventBus在监听的时候就会触发多次，这是一个非常大的隐患，所以在vue页面销毁时，同时移除EventBus的监听EventBus.$off('aMsg', {})

