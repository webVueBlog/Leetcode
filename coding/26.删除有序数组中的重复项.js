/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}

输入：nums = [1,1,2]
输出：2, nums = [1,2,_]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。

输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。

提示：

0 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
nums 已按 升序 排列

var removeDuplicates = function(nums) {
 let i = 0;
 for(let j = 0; j < nums.length; j++) {
     console.log(nums[j], 'nums[j]', nums[i], 'nums[i]')
  // 遍历数组
  if(nums[j] != nums[i]) {
   nums[++i] = nums[j];
      console.log(nums[++i], 'nums[++i]');
  }
    console.log(i, 'i')
 }
 return ++i;
};

removeDuplicates([1,1,2])

1 'nums[j]' 1 'nums[i]'
0 'i'

1 'nums[j]' 1 'nums[i]'
0 'i'

2 'nums[j]' 1 'nums[i]'
2 'nums[++i]'

2 'i'

3

 */
//(76 ms)
var removeDuplicates = function(nums) {
 let i = 0;
 for(let j = 0; j < nums.length; j++) {
  // 遍历数组
  if(nums[j] != nums[i]) {
   nums[++i] = nums[j];
  }
 }
 return ++i;
};
// @lc code=end

