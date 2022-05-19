/**
 * @param {string} s
 * @return {number}
 剑指 Offer 48. 最长不含重复字符的子字符串
 "abcabcbb"
 */
var lengthOfLongestSubstring = function(s) {
    const n = s.length;
    let i = 0;
    let max = 0;
    let window = [];
    while(i<n) {
        let index = window.indexOf(s[i]);
        if(index!==-1){
            window.splice(0,index+1);
        }
        window.push(s[i]);
        max=Math.max(max, window.length);
        i++;
    }
    return max;
};