如何在 Git 恢复先前的提交

要撤销提交但保留更改：

git reset +当前文件

git status检测更改

要修改提交中的更改：git reset --hard +当前文件名

如果使用了 --hard，文件将重置到提交时的状态。

撤销提交但保留文件和索引：git reset --soft +文件名



