/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。

注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。

输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
     注意，你可以重复使用字典中的单词。

输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false

BFS
 (60 ms)
 */
const wordBreak = (s, wordDict) => {
 if (wordDict == null || wordDict.length === 0) return false;
 const set = new Set(wordDict);
 const visited = new Set();
 const q = [0];

 while (q.length) {
   const start = q.shift();

   if (!visited.has(start)) {
     for (let end = start + 1; end <= s.length; end++) {
       if (set.has(s.slice(start, end))) {
         if (end === s.length) return true;
         q.push(end);
       }
     }
     visited.add(start);
   }
 }
 return false;
};
// @lc code=end

