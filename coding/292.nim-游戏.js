/*
 * @lc app=leetcode.cn id=292 lang=javascript
 *
 * [292] Nim 游戏
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}

桌子上有一堆石头。
你们轮流进行自己的回合， 你作为先手 。
每一回合，轮到的人拿掉 1 - 3 块石头。
拿掉最后一块石头的人就是获胜者。
假设你们每一步都是最优解。请编写一个函数，来判断你是否可以在给定石头数量为 n 的情况下赢得游戏。如果可以赢，返回 true；否则，返回 false 。

输入：n = 1
输出：true

输入：n = 2
输出：true

输入：n = 4
输出：false 
解释：以下是可能的结果:
1. 移除1颗石头。你的朋友移走了3块石头，包括最后一块。你的朋友赢了。
2. 移除2个石子。你的朋友移走2块石头，包括最后一块。你的朋友赢了。
3.你移走3颗石子。你的朋友移走了最后一块石头。你的朋友赢了。
在所有结果中，你的朋友是赢家。

我的第一个方法是这样的，使用动态编程和记忆。

n的输赢取决于:canWinNim(n - 3) || !canWinNim(n - 2) || !canWinNim(n - 1)，因为canWinNim(n - c)表示轮到下一个玩家。

时间复杂度:O (n)

空间复杂度:O (n)

 (48 ms)
 */
/**
 * @param {number} n
 * @return {boolean}
 */
// const memo = {0: false, 1: true, 2: true, 3: true}

// var canWinNim = function(n) {
// n %= 4
//     if (memo[n] === undefined) {
//         memo[n] = !canWinNim(n - 3) || !canWinNim(n - 2) || !canWinNim(n - 1)
//     }
//     return memo[n]
// };

var canWinNim = n => n%4 !== 0
// @lc code=end

