/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] Letter Case Permutation
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 * 'A'.charCodeAt() // 65
 * 'a'.charCodeAt() // 97
 * 'z'.charCodeAt() // 122
 * 'Z'.charCodeAt() // 90
 */
var letterCasePermutation = function(s) {
    const dfs = (current, index, res) => { // a1 2 []
        if (current.length === s.length) { // 是否满足要求的一种答案
            res.push(current);
        }
        if (index >= s.length) { // 终止条件
            return;
        }
        let str = s[index];
        if (isLetter(str)) {
            let lower = str.toLowerCase(); // b
            let upper = str.toUpperCase(); // B
            dfs(current + lower, index + 1, res); // a1b 3
            dfs(current + upper, index + 1, res); // a1B 3
        } else {
            dfs(current + str, index + 1, res); // a1b2, a1B2
        }
    }
    let ans = [];
    dfs('', 0, ans);
    return ans;
};

function isLetter(str) {
    // a-z 97-122 A-Z 65-90
    let code = str.charCodeAt();
    return (code >= 97 && code <= 122) || (code >= 65 && code <= 90);
}
// @lc code=end