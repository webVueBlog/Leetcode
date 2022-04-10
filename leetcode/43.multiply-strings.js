/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] Multiply Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
/*
  1 2 3
x 4 5 6 i
----------
    7 3 8
  6 1 5 0
4 9 2 0 0
----------
5 7 0 8 8


*/
var multiply = function(num1, num2) {
    let len2 = num2.length;
    let sum = [];
    for (let i = len2 - 1; i >= 0; i--) {
        let fill = len2 - i - 1;
        let product = multi(num1, num2[i], fill);
        sum.push(product);
    }
    let result = sum.reduce((prev, next) => {
        return addStrings(prev, next);
    });
    while (result.length > 1 && result[0] === '0') {
        result = result.slice(1);
    }
    return result;
};

function multi(n1, n2, fill) {
    fill = fill >= 0 ? fill : 0;
    let carry = 0;
    let result = '';
    let i = n1.length - 1;
    while (i >= 0) {
        let curr = n1[i];
        let product = Number(curr) * Number(n2) + carry;
        if (product >= 10) {
            let strPro = String(product);
            carry = Number(strPro[0]);
            result = strPro[1] + result;
        } else {
            carry = 0;
            result = product + result;
        }
        i--;
    }
    if (carry !== 0) {
        result = carry + result;
    }
    return result + '0'.repeat(fill);
}

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
        ans = carry + ans;
    }
    return ans;
};

function add(n1, n2, lastCarry) {
    let nextCarry = 0;
    let result = 0;
    let sum = n1 + n2 + lastCarry;
    if (sum >= 10) {
        let strSum = String(sum);
        result = strSum.slice(1) * 1;
        nextCarry = strSum.slice(0, 1) * 1;
    } else {
        result = sum
    }
    return {
        result,
        nextCarry
    }
}
// @lc code=end