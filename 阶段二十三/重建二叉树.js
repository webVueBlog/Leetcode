/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder) return null;

    let rootValue = preorder[0];
    const root = new TreeNode(rootValue);
    const rootIndex = inorder.indexOf(rootValue);

    if (rootIndex === -1) return null;
    preorder.shift();

    root.left = buildTree(preorder, inorder.slice(0, rootIndex));
    root.right = buildTree(preorder, inorder.slice(rootIndex + 1));

    return root;
};