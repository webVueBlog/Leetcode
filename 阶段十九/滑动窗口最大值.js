/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}

 239. 滑动窗口最大值

 nums = [1,3,-1,-3,5,3,6,7], k = 3
 比较的值，存的是索引？
 */
 
var maxSlidingWindow = function(nums, k) {
    let ans = [];
    let window = [];
    let len = nums.length;
    for(let i = 0; i < len; i++) {
        let current = nums[i];
        while(window.length > 0 && window[0] <= i-k) {
            window.shift();
        }
        while(window.length > 0 && nums[window[window.length-1]] < current ) {
            window.pop();
        }
        window.push(i);
        if(i >= k-1) {
            ans.push(nums[window[0]]);
        }
    }
    return ans;
};




var maxSlidingWindow = function(nums, k) {
    if(nums.length === 0 || k === 0) return [];
    let slideWindow = [];
    const ret = [];

    for (let i = 0; i < nums.length - k + 1; i++) {
        for(let j = 0; j < k; j++) {
            // 窗口大小
            slideWindow.push(nums[i+j]);
        }
        ret.push(Math.max(...slideWindow));
        slideWindow = [];
    }
    return ret;
};