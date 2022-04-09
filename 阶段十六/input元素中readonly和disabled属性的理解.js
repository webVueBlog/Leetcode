/**


相同点：都会使文本框变成只读，不可编辑。
不同点：
1.disabled属性在将input文本框变成只读不可编辑的同时，还会使文本框变灰，但是readonly不会。
2.disabled属性修饰后的文本框内容，在不可编辑的同时，通过js也是获取不到的。但是用readonly修饰后的文本框内容，是可以通过js获取到的，也就只是简单的不可编辑而已！
3.disabled属性对input文本框，单选radio,多选checkbox都适用，但是readonly就不适用，用它修饰后的单选以及多选按钮仍然是可以编辑状态的。


在表现上 readonly 和 disabled 都不能让用户对 input 进行编辑。但从含义上两者还是有较大的差别的。

readonly 直译为 “只读”，一般用于只允许用户填写一次的信息，提交过一次之后，就不允许再次修改了。

disabled 直译为 “禁用”，即这个 input 就是不允许填写和使用的（可能是因为权限或者其他原因）。

因此在外观上，readonly 与普通 input 无异，只是点击后无法进行编辑；而 disabled 的 input 呈灰色，也不允许点击。从这两点其实也可以看出，对于 input 的事件，readonly 会响应，而 disabled 是不响应的。并且在传输数据上，disabled 的数据是不会被获取和上传，readonly 的数据会被获取和上传。


*/