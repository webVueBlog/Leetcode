/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

 */
// (68 ms) 时间复杂度为O(n)。
// var twoSum = function(nums, target) {
//  let map = new Map();
//  for(let i = 0; i < nums.length; i++) {
//   // 遍历数组
//   if(map.has(target - nums[i])) {
//    // 返回索引数组答案
//    return [map.get(target - nums[i]), i];
//   } else {
//    map.set(nums[i], i);
//   }
//  }
//  return [];
// };

//  (64 ms) 时间复杂度为O(n)。
var twoSum = function(nums, target) {
 let hash = {};
 for(let i = 0; i < nums.length; i++) {
  // 获取当前数组的值
  const n = nums[i];
  if(hash[target - n] !== undefined) {
   return [hash[target-n], i];
  }
  // 当前对象 属性值为所在索引位置
  hash[n] = i;
 }
 return [];
};
// @lc code=end

