// 动态规划，一个完整的问题，它可以分解成很多更小规模的子问题，然后由这些小规模的子问题，小规模问题的最优解，就可以推导出来整个问题的最优解
// 只有你局部做到最优，那么你全局整个问题都是最优的
// 动态规划：状态 + 选择
/**
[10,9,2,5,3,7,101,18]
[10,9,2,5,3,7,101]
[10,9,2,5,3,7] 18 3 + 1 = 4
3
 */
/**
 * @param {number[]} nums
 * @return {number}
 300.最长递增子序列 #动态规划
 */
 var lengthOfLIS = function(nums) {
  let len = nums.length
  let max = 1
  let dp = new Array(len).fill(1)
  for (let i = 0; i<len; i++) {
      for (let j = 0; j < i; j++) {
          if(nums[j] <nums[i]) {
              dp[i] = Math.max(dp[j] + 1, dp[i])
          }
      }
      max = Math.max(dp[i], max)
  }
  return max
};