/*
 * @lc app=leetcode.cn id=1319 lang=javascript
 *
 * [1319] Number of Operations to Make Network Connected
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 * // 1. 将 p 和 q 连接
   // 2. 判断 p 和 q 是否连通
   // 3. 返回图中有多少个连通分量
 */
class UnionFind {
    constructor(n) {
        this.parent = new Array(n).fill(0).map((v, i) => i);
        this.size = new Array(n).fill(1);
        this.count = n;
    }
    find(x) {
        let parent = this.parent;
        while (x !== parent[x]) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }
    connected(p, q) {
        const rootP = this.find(p);
        const rootQ = this.find(q);
        return rootP === rootQ;
    }
    union(p, q) {
        let size = this.size;
        let parent = this.parent;
        const rootP = this.find(p);
        const rootQ = this.find(q);
        if (rootP === rootQ) return;
        if (size[rootP] >= size[rootQ]) {
            parent[rootQ] = rootP;
            size[rootP] += size[rootQ];
        } else {
            parent[rootP] = rootQ;
            size[rootQ] += size[rootP];
        }
        this.count--;
    }
}
var makeConnected = function(n, connections) {
    const union = new UnionFind(n);
    let rest = 0;
    for (let i = 0; i < connections.length; i++) {
        const [a, b] = connections[i];
        if (union.connected(a, b)) {
            rest++;
        } else {
            union.union(a, b);
        }
    }
    return (rest >= union.count - 1) ? union.count - 1 : -1;
};
// @lc code=end