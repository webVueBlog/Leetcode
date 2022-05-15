/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 

输入：height = [4,2,0,3,2,5]
输出：9
(60 ms)
 */
var trap = function(height) {
    const n = height.length;
    const left = new Array(n).fill(0);
    const right = new Array(n).fill(0);
    let ans = 0;
    for (let i = 1; i < n; i++) {
        left[i] = Math.max(left[i - 1], height[i - 1]);
    }

    for (let i = n - 2; i >= 0; i--) {
        right[i] = Math.max(right[i + 1], height[i + 1]);
        let short = Math.min(left[i], right[i]);
        if (short > height[i]) {
            ans += short - height[i];
        }
    }
    return ans;
};
// @lc code=end