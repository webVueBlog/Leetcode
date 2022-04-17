/**
 * @param {string} s
 * @return {string[]}
 * 剑指 Offer 38. 字符串的排列
 */
var permutation = function(s) {
    let ans = [];
    s = s.split('').sort((a, b) => {
        return a > b ? 1 : -1;
    }).join('');

    const dfs = (curr, store) => {
        // 1.是否满足条件，记录结果
        // 2.判断终止条件
        if (!store.length) {
            return ans.push(curr);
        }
        // 3.继续搜索
        for (let i = 0; i < store.length; i++) {
            if (i > 0 && store[i] === store[i - 1]) continue;
            dfs(curr + store[i], store.slice(0, 1) + store.slice(i + 1));
        }
    }
    dfs('', s);
    return ans;
};