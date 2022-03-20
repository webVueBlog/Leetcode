/**
 * 1. .stop 等同于 JavaScript 中的event.stopPropagation()，防止事件冒泡；
 * 2. .prevent 等同于 JavaScript 中的 event.preventDefault(), 防止执行预设的行为
 * 3. .capture 与事件冒泡的方向相反，事件捕获有外到内
 * 4. .self 只会触发自己范围内的事件，不含子元素
 * 5. .once 只会触发一次
 */