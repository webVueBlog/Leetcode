/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * 给你两个二进制字符串，返回它们的和（用二进制表示）。

输入为 非空 字符串且只包含数字 1 和 0。

输入: a = "11", b = "1"
输出: "100"

输入: a = "1010", b = "1011"
输出: "10101"

其思想是使用输入a和b来构建两个二进制文本。计算和是通过对二进制字面值调用BigInt函数来完成的，将它们相加并返回和，同时调用toString方法，将2作为参数，因为我们处理的是二进制数。

(64 ms)

 */
var addBinary = function(a, b) {
    const aBin = `0b${a}`
    const bBin = `0b${b}`
    const sum = BigInt(aBin) + BigInt(bBin)
    return sum.toString(2)
};
// @lc code=end