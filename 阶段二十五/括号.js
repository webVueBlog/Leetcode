/**
 * @param {number} n
 * @return {string[]}
 面试题 08.09. 括号
 dfs()
 ''
 左括号的数量
 左括号的剩余数量
 右括号的数量
 右括号的剩余数量
当前状态‘(()’
用了多少个左括号
用了多少个右括号
 */
var generateParenthesis = function(n) {
    const ans = [];
    // 穷举
    const dfs = (curr, l, r) => {
        // 1.终止条件
        // 2.满足条件记录结果
        if(curr.length === 2*n) {
            return ans.push(curr.join(''));
        }
        // 3.继续尝试
        if(n - l > 0) {
            dfs([...curr, '('], l+1, r);
        }
        if(n - r > 0 && r < l) {
            dfs([...curr, ')'], l, r+1);
        }
    }
    dfs([], 0, 0);
    return ans;
};