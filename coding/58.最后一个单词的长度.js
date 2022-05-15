/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。

单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

输入：s = "Hello World"
输出：5
解释：最后一个单词是“World”，长度为5。


输入：s = "   fly me   to   the moon  "
输出：4
解释：最后一个单词是“moon”，长度为4。


输入：s = "luffy is still joyboy"
输出：6
解释：最后一个单词是长度为6的“joyboy”。

(60 ms)
 */
var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length;
};
// @lc code=end