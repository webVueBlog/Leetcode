/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}

给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。

示例 1：
输入：haystack = "hello", needle = "ll"
输出：2

示例 2：
输入：haystack = "aaaaa", needle = "bba"
输出：-1

示例 3：
输入：haystack = "", needle = ""
输出：0

 */
// (64 ms)
// (60 ms)
var strStr = function(haystack, needle) {
    // 要在第一个字符串中，找到第二个字符串的位置
    // 如果第二个字符串为空字符，或者两者相等，则返回0
    if (needle === '' || haystack === needle) return 0;
    // 如果第一个字符串的长度小于第二个字符串的长度，则返回-1
    if (haystack.length < needle.length) return -1;
    // 遍历几次，第一个字符串的长度-第二个字符串的长度
    // 要遍历整个第二个字符串的长度
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        // 当前遍历的值 haystack[i] 要等于第二个字符串的第一个位置
        if (haystack[i] === needle[0]) {
            // 才开始进入判断第二个字符串循环，循环遍历的是第二个字符串的长度
            for (let j = 0; j < needle.length; j++) {
                // 第二个字符串当前值needle[j]
                // 当前第一个字符串当这个值为 haystack[i+j]
                if (needle[j] !== haystack[i + j]) {
                    break;
                } else if (j === needle.length - 1) {
                    // 如果相等的话，遍历完当前j等于第二个字符串的长度-1
                    // 返回当前索引
                    return i;
                }
            }
        }
    }
    // 默认返回-1
    return -1;
};
// @lc code=end