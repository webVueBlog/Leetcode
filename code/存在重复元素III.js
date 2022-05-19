/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
220.存在重复元素III #滑动窗口
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    let len = nums.length;
    let window = [];
    let ans = false;
    out: for (let i = 0; i < len; i++) {
        let value = nums[i];
        for (let j = 0; j < window.length; j++) {
            let w = window[j];
            if (Math.abs(w - value) <= t) {
                ans = true;
                break out;
            }
        }
        window.push(value);
        if (window.length > k) {
            window.shift();
        }
    }
    return ans;
};