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