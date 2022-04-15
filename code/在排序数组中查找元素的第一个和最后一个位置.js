/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 34. 在排序数组中查找元素的第一个和最后一个位置
 */
var searchRange = function(nums, target) {
    let ans = new Array(2).fill(-1);
    nums = nums.sort((a,b) => a - b);
    let startIndex = nums.findIndex(value => value === target)
    if(startIndex !== -1) {
        ans[0] = startIndex
        let endIndex = nums.lastIndexOf(target)
        if(endIndex !== -1) {
            ans[1] = endIndex
        }
    }
    return ans;
};