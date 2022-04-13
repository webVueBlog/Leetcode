/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 216. 组合总和 III
 */
var combinationSum3 = function(k, n) {
    let nums = new Array(9).fill(1).map((_,index) => index +1)
    let ans = []
    const dfs = (current, sum, store) => {
        // 是否满足要求，记录结果
        if (current.length === k && sum === n) {
            ans.push([...current]);
        }
        // 终止条件
        if (current.length >= k || sum >= n) return
        // 继续尝试
        for (let i=0; i<store.length; i++) {
            let value = store[i]; 
            dfs(current.concat(value), sum + value, store.slice(i+1))
        }
    }
    dfs([], 0, nums);
    return ans;
};