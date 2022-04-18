/*
 * @lc app=leetcode.cn id=2135 lang=javascript
 *
 * [2135] Count Words Obtained After Adding a Letter
 */

// @lc code=start
/**
 * @param {string[]} startWords
 * @param {string[]} targetWords
 * @return {number}
 */
var wordCount = function(startWords, targetWords) {
    let ans = 0;
    const set = new Set();
    const pos = x => x.charCodeAt() - 'a'.charCodeAt();
    for (const word of startWords) {
        let x = 0;
        for (const char of word) {
            const offset = pos(char);
            x = x | (1 << offset)
        }
        set.add(x);
    }

    for (const target of targetWords) {
        let x = 0;
        for (const char of target) {
            const offset = pos(char);
            x = x | (1 << offset)
        }
        for (const char of target) {
            // t a c k = x
            const offset = pos(char);
            const t = x ^ (1 << offset);
            if (set.has(t)) {
                ans++;
                break;
            }
        }
    }
    return ans;
};
// @lc code=end