/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉 K 位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 * 栈
1432219 k = 3 2 1 0
      9
[1,2,1,9]

50027
[0,0,2,5,7]

9 k = 1
98765 k = 3
[9,8,7,6,5]

num = "10", k = 2
"0"
 */
var removeKdigits = function(num, k) {
    let stack = [];
    let len = num.length;
    for (let i = 0; i < len; i++) {
        let current = num[i];
        while (k > 0 && stack.length > 0 && current < stack[stack.length - 1]) {
            stack.pop();
            k--;
        }
        stack.push(current);
    }
    while (k > 0) {
        stack.pop();
        k--;
    }
    while (stack.length > 0 && stack[0] === '0') {
        stack.shift();
    }
    return stack.length > 0 ? stack.join('') : '0';
};
// @lc code=end