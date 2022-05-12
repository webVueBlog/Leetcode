/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * 1 2 3 i
 +   4 9 j
---------
       2

  9 + 3 = 12; 2 进位1 '9' + '3' => Number => 9 + 3 => {1, 2}
  进位: 1

输入：num1 = "11", num2 = "123"
输出："134"

(72 ms)
typeof ('1'-'0')
'number'
 (76 ms)
 */
var addStrings = function(num1, num2) {
    // num1字符串的长度
    let i = num1.length - 1;
    // num2字符串的长度
    let j = num2.length -1;
    // 进位
    let carry = 0;
    // 总数
    let sum = '';
    // 条件判断 i,j不小于0 carry有值
    for(;i >= 0 || j >= 0 || carry > 0; i--, j--) {
        const digit1 = i < 0 ? 0 : num1.charAt(i) - '0';
        const digit2 = j < 0 ? 0 : num2.charAt(j) - '0';
        const digitsSum = digit1 + digit2 + carry;
        // 获取最后一位
        sum = `${digitsSum % 10}${sum}`;
        // 获取进位
        carry = Math.floor(digitsSum / 10);
    }
    return sum;
}
// var addStrings = function(num1, num2) {
//     let len1 = num1.length;
//     let len2 = num2.length;
//     let i = len1 - 1;
//     let j = len2 - 1;
//     let carry = 0; // 进位
//     let ans = '';
//     while (i >= 0 || j >= 0) {
//         let curr1 = i < 0 ? 0 : num1[i] * 1;
//         let curr2 = j < 0 ? 0 : num2[j] * 1;
//         let { result, nextCarry } = add(curr1, curr2, carry);
//         carry = nextCarry;
//         ans = result + ans;
//         i--;
//         j--;
//     }
//     if (carry !== 0) {
//         ans = carry + ans
//     }
//     return ans;

// };

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