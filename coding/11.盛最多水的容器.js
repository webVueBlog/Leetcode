/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 * 双指针
 */
var maxArea = function(height) {
    let ans = 0,
        l = 0,
        r = height.length - 1
    while (l < r) {
        ans = Math.max(ans, Math.min(height[l], height[r]) * (r - l))
        height[l] < height[r] ? l++ : r--
    }
    return ans
};

// var maxArea = function(height) {
//     let l = 0,
//         r = height.length - 1;
//     let ans = 0;
//     while (l <= r) {
//         ans = Math.max(
//             ans,
//             Math.min(height[l], height[r]) * (r - l)
//         );
//         if (height[l] < height[r]) {
//             l++
//         } else {
//             r--
//         }
//     }
//     return ans;
// };
// @lc code=end