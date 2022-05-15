/*
 * @lc app=leetcode.cn id=413 lang=javascript
 *
 * [413] 等差数列划分
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 如果一个数列 至少有三个元素 ，并且任意两个相邻元素之差相同，则称该数列为等差数列。

例如，[1,3,5,7,9]、[7,7,7,7] 和 [3,-1,-5,-9] 都是等差数列。
给你一个整数数组 nums ，返回数组 nums 中所有为等差数组的 子数组 个数。

子数组 是数组中的一个连续序列。

输入：nums = [1,2,3,4]
输出：3
解释：nums 中有三个子等差数组：[1, 2, 3]、[2, 3, 4] 和 [1,2,3,4] 自身。

输入：nums = [1]
输出：0
(64 ms)
 */
var numberOfArithmeticSlices = function(A) {
    let sum = 0;
    dp = Array(A.length).fill(0);
    for (var i = 2; i <= dp.length - 1; i++) {
        if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
            dp[i] = 1 + dp[i - 1];
            sum += dp[i];
        }
    }
    return sum;
};
// @lc code=end