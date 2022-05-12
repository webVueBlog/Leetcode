/*
 * @lc app=leetcode.cn id=395 lang=javascript
 *
 * [395] 至少有 K 个重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}

给你一个字符串 s 和一个整数 k ，请你找出 s 中的最长子串， 要求该子串中的每一字符出现次数都不少于 k 。返回这一子串的长度。

输入：s = "aaabb", k = 3
输出：3
解释：最长子串为 "aaa" ，其中 'a' 重复了 3 次。

输入：s = "ababbc", k = 2
输出：5
解释：最长子串为 "ababb" ，其中 'a' 重复了 2 次， 'b' 重复了 3 次。

 (76 ms)
 (56 ms)
 */

var longestSubstring = function(s,k) {
    const map = {}
    let max = 0

    for(let char of s) {
        map[char] ? map[char]++ : map[char] = 1
    }

    for(const [word, count] of Object.entries(map)) {
        if(count < k) {
            for(let seg of s.split(word)) {
                max = Math.max(max, longestSubstring(seg, k))
            }
            return max
        }
    }
    return s.length
}
// var longestSubstring = function(s, k) {
//  let maxUnique = new Set(s).size;

//  let max = 0;
//  for (let curUnique = 1; curUnique <= maxUnique; curUnique++) {
//      let start = 0, end = 0, atLeastK = 0, unique = 0, m = new Map();
//      while (end < s.length) {    
//          m.set(s[end], m.get(s[end]) + 1 || 1);
//          if (m.get(s[end]) == 1) unique++;
//          if (m.get(s[end]) == k) atLeastK++;
         
//          while (unique > curUnique) {
//              m.set(s[start], m.get(s[start]) - 1);
//              if (m.get(s[start]) == k-1) atLeastK--;
//              if (m.get(s[start]) == 0) unique--;
//              start++;
//          }
//          if (unique == curUnique && unique == atLeastK) {
//              max = Math.max(max, end - start + 1);
//          } 
//          end++;
//      }
//  }
//  return max;
// };


// @lc code=end

