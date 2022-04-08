/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * 
 * abcabcbb
 * 
 * i
 *  j
 * 
 * [a,b]
 * 
 * {
 *  a: 1,
 *  b: 1
 * }
 */
var lengthOfLongestSubstring = function(s) {
    let ans = 0;
    const map = new Map();
    let i = 0;
    for (let j = 0; j < s.length; j++) {
        const v = s[j];
        map.set(v, (map.get(v) || 0) + 1);
        while (map.get(v) > 1) {
            map.set(s[i], map.get(s[i]) - 1);
            i++;
        }
        ans = Math.max(j - i + 1, ans);
    }
    return ans;
    // const map = {};
    // var left = 0;

    // return s.split('').reduce((max, v, i) => {
    //     left = map[v] >= left ? map[v] + 1 : left;
    //     map[v] = i;
    //     return Math.max(max, i - left + 1);
    // }, 0);
};
// @lc code=end