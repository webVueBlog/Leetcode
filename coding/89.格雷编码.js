/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}

输入：n = 2
输出：[0,1,3,2]
解释：
[0,1,3,2] 的二进制表示是 [00,01,11,10] 。
- 00 和 01 有一位不同
- 01 和 11 有一位不同
- 11 和 10 有一位不同
- 10 和 00 有一位不同
[0,2,3,1] 也是一个有效的格雷码序列，其二进制表示是 [00,10,11,01] 。
- 00 和 10 有一位不同
- 10 和 11 有一位不同
- 11 和 01 有一位不同
- 01 和 00 有一位不同


输入：n = 1
输出：[0,1]

(92 ms)
 */
var grayCode = function(n) {
 const codeCount = 1 << n;
 let result = [];
 for(let i = 0; i < codeCount; i++) {
  code = i ^ (i >> 1);
  result.push(code);
 }
 return result;
};
// @lc code=end

