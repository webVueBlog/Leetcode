/**
实现 Iterable 接口（可迭代协议）要求同时具备两种能力：支持迭代的自我识别能力和创建实现
Iterator 接口的对象的能力。


在 ECMAScript 中，这意味着必须暴露一个属性作为“默认迭代器”，而
且这个属性必须使用特殊的 Symbol.iterator 作为键。

这个默认迭代器属性必须引用一个迭代器工厂
函数，调用这个工厂函数必须返回一个新迭代器。

*/