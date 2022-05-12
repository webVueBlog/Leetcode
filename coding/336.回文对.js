/*
 * @lc app=leetcode.cn id=336 lang=javascript
 *
 * [336] 回文对

给定一组 互不相同 的单词， 找出所有 不同 的索引对 (i, j)，使得列表中的两个单词， words[i] + words[j] ，可拼接成回文串。

输入：words = ["abcd","dcba","lls","s","sssll"]
输出：[[0,1],[1,0],[3,2],[2,4]] 
解释：可拼接成的回文串为 ["dcbaabcd","abcddcba","slls","llssssll"]

输入：words = ["bat","tab","cat"]
输出：[[0,1],[1,0]] 
解释：可拼接成的回文串为 ["battab","tabbat"]

输入：words = ["a",""]
输出：[[0,1],[1,0]]

(1672 ms)
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
 // ans答案
 let wmap = new Map(), ans = []
 for(let i = 0; i < words.length; i++) {
  // 遍历数组 值 - 索引
  wmap.set(words[i], i)
 }
 for(let i = 0; i < words.length; i++) {
  // 遍历数组
  if(words[i] === '') {
   for(let j = 0; j < words.length; j++) {
    if(isPal(words[j]) && j !== i) {
     ans.push([i, j], [j, i])
    }
   }
   continue
  }
  let bw = words[i].split('').reverse().join('')
  let res = wmap.get(bw)
  if(res !== undefined && res !== i) {
   ans.push([i, res])
  }
  for(let j = 1; j < bw.length; j++) {
   if(isPal(bw, 0, j - 1)) {
    let res = wmap.get(bw.slice(j))
    if(res !== undefined) {
     ans.push([i, res])
    }
   }
   if(isPal(bw, j)) {
    let res = wmap.get(bw.slice(0,j))
    if(res !== undefined) {
     ans.push([res, i])
    }
   }
  }
 }
 return ans
};
const isPal = (word, i=0, j=word.length-1) => {
 while (i < j)
     if (word[i++] !== word[j--]) return false
 return true
}
// @lc code=end

