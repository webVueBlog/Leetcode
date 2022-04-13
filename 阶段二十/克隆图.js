/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 133. 克隆图
 */
var cloneGraph = function(node) {
    let map = new Map();
    const dfs = (dot) => {
        if(!dot) return;
        let backup = new Node(dot.val);
        map.set(dot, backup);
        dot.neighbors.forEach(ne => {
            if(!map.has(ne)) {
                dfs(ne);
            }
            backup.neighbors.push(map.get(ne));
        })
        return backup;
    }
    dfs(node);
    return map.get(node);
};