/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] Sum Root to Leaf Numbers
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * let ans = [];

    function bst(node) {
        ans.push(node.val);
        if (node.left) bst(node.left)
        if (node.right) bst(node.right)
    }
    bst(root);
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    let sum = 0;
    const bst = (current, node) => {
        if (!node) return;
        if (!node.left && !node.right) {
            sum += (current + node.val) * 1;
            return;
        }
        bst(current + node.val, node.left);
        bst(current + node.val, node.right);

    }
    bst('', root);
    return sum;
};
// @lc code=end