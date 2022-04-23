/**
 * @param {number[]} height
 * @return {number}
42. 接雨水
每一个柱子左侧最高的柱子的高度是多少，每一个柱子右侧最高的柱子的高度是多少
然后就能找到当前这根柱子上能不能接雨水，能接多少雨水
 */
var trap = function(height) {
    const n = height.length;
    const left = new Array(n).fill(0);
    const right = new Array(n).fill(0);
    let ans = 0

    for (let i = 1; i < n; i++) {
        left[i] = Math.max(left[i - 1], height[i - 1]);
    }

    for (let i = n - 2; i >= 0; i--) {
        right[i] = Math.max(right[i + 1], height[i + 1]);
        const short = Math.min(left[i], right[i]);
        if (short > height[i]) {
            ans += short - height[i];
        }
    }

    return ans;
};