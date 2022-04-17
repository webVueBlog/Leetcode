/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
剑指 Offer 32 - I. 从上到下打印二叉树
 */
var levelOrder = function(root) {
    const queue = [root];
    const ans = [];
    while (queue.length) {
        let size = queue.length;
        while (size > 0) {
            let top = queue.shift();
            if (top) {
                ans.push(top.val);
            }
            if (top && top.left) {
                queue.push(top.left);
            }
            if (top && top.right) {
                queue.push(top.right);
            }
            size--;
        }
    }
    return ans;
};