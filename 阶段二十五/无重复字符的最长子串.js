/**
 * @param {string} s
 * @return {number}
 3. 无重复字符的最长子串
 abcabcbb
  i
    j
 [a,b] // i往右走， 长度-1
 {
     a: 1,
     b: 1,
     c: 0
 }
 */
var lengthOfLongestSubstring = function(s) {
    let ans = 0;
    const map = new Map();
    let i = 0;
    for(let j = 0; j < s.length; j++) {
        const v = s[j];
        map.set(v, (map.get(v) || 0) + 1)
        while(map.get(v) > 1) {
            map.set(s[i], map.get(s[i]) - 1)
            i++;
        }
        ans = Math.max(j-i+1, ans);
    }
    return ans;
};