/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// [1,3],[2,6]
// [1,4],[4,5]
// s1 s2 s1[1] >= s2[0]
// current next
var merge = function(intervals) {
    // 创建数组返回
    let ans = [];
    let len = intervals.length;
    let index = 0;
    let current = [];
    intervals.sort((prev, next) => prev[0] - next[0])
    while (index < len) {
        let next = intervals[index++];
        if (current.length === 0) {
            current = next
        } else {
            if (current[1] >= next[0]) { // 能合并
                current = [current[0], Math.max(current[1], next[1])];
            } else { // 不能合并
                ans.push([...current]);
                current = next;
            }
        }
    }
    if (current.length > 0) {
        ans.push([...current]);
    }
    return ans;
};
// @lc code=end