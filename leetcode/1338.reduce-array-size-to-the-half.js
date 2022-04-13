/*
 * @lc app=leetcode.cn id=1338 lang=javascript
 *
 * [1338] Reduce Array Size to The Half
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    let map = {};
    let len = arr.length;
    let times = [];
    let targetLen = len / 2;
    let count = 0;
    for (let i = 0; i < len; i++) {
        let value = arr[i];
        if (!map[value]) {
            map[value] = 0;
        }
        ++map[value];
    }

    Object.keys(map).forEach(key => {
        times.push(map[key]);
    })

    times.sort((x, y) => y - x);

    let dels = 0;
    for (let i = 0; i < times.length; i++) {
        if (dels >= targetLen) break;
        dels += times[i];
        count++;
    }
    return count;
};
// @lc code=end