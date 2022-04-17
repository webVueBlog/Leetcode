/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const n = nums.length;
    const queue = [];
    let q = queue;
    const ans = [];

    for (let i = 0; i < n; i++) {
        // 1.清除掉窗口外的项目
        while (q.length && q[0] <= i - k) {
            q.shift();
        }
        // 2.维持队列的单调性，单调递减
        while (q.length && nums[q[q.length - 1]] < nums[i]) {
            q.pop();
        }
        // 3. 往队列 中放
        q.push(i);
        if (i >= k - 1) {
            ans.push(nums[q[0]]);
        }
    }
    return ans;
};