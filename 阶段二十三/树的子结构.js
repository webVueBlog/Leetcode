/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 剑指 Offer 26. 树的子结构
 1.遍历A，以每一个根节点P判断是否包含B
 2.P.val === B.val && P.left 包含 B.left && P.right 包含B.right
 是否包含,遍历
 */
var isSubStructure = function(A, B) {
    if (!B) return false;
    let ans = false;
    const isInclude = (P, Q) => {
        if (!P && !Q) return true;
        if (!P && Q) return false;
        if (!Q && P) return true;

        if (P.val === Q.val) {
            return isInclude(P.left, Q.left) && isInclude(P.right, Q.right);
        } else {
            return false;
        }
    }
    const bst = (node) => {
        if (!node) return;
        if (isInclude(node, B)) {
            return ans = true;
        }
        bst(node.left);
        bst(node.right);
    }
    bst(A);
    return ans;
};