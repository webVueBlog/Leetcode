/**
 * @param {number[]} nums
 * @return {number[]}
503.下一个更大元素II
 */
var nextGreaterElements = function(nums) {
    nums = nums.concat(nums);
    let len = nums.length;
    let oldLen = len / 2;
    let stack = [];
    let ans = new Array(oldLen).fill(-1)
    for (let i = 0; i < len; i++) {
        let current = nums[i];
        while (stack.length > 0 && current > nums[stack[stack.length - 1]]) {
            let topIndex = stack[stack.length - 1];
            ans[topIndex % oldLen] = current;
            stack.pop();
        }
        stack.push(i);
    }
    return ans;
};