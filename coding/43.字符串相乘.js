/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
     1 2 3
     4 5 6
  --------
     7 3 8
   6 1 5 0
 4 9 2 0 0
-----------
 5 7 0 8 8

 进位: 1
 */
var multiply = function(num1, num2) {

};
var addStrings = function(num1, num2) {
    let len1 = num1.length;
    let len2 = num2.length;
    let i = len1 - 1;
    let j = len2 - 1;
    let carry = 0; // 进位
    let ans = '';
    while (i >= 0 || j >= 0) {
        let curr1 = i < 0 ? 0 : num1[i] * 1;
        let curr2 = j < 0 ? 0 : num2[j] * 1;
        let { result, nextCarry } = add(curr1, curr2, carry);
        carry = nextCarry;
        ans = result + ans;
        i--;
        j--;
    }
    if (carry !== 0) {
        ans = carry + ans
    }
    return ans;

};

function add(n1, n2, lastCarry) {
    let nextCarry = 0;
    let result = 0;
    let sum = n1 + n2 + lastCarry;
    if (sum >= 10) {
        let strSum = String(sum)
        result = strSum.slice(1) * 1
        nextCarry = strSum.slice(0, 1) * 1
    } else {
        result = sum
    }
    return {
        result,
        nextCarry
    }
}
// @lc code=end