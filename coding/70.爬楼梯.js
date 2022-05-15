/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶

输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶

提示：

1 <= n <= 45

dp

Dp [i]表示采取i个步骤的不同方式的总数

我们想要得到dp[n]。

Dp [n] = Dp [n-1] + Dp [n-2]因为我们可以采取1步或2步。

我们有两种基本情况dp[1] = 1和dp[2] = 2，因为

1步有一种方法，2步有两种方法(1步+ 1步或2步)

(64 ms)
(52 ms)
 */
var climbStairs = function(n) {
    let dp = new Array(n + 1);
    dp[1] = 1, dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
// @lc code=end