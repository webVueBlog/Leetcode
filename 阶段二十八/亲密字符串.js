/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 859. 亲密字符串
 */
var buddyStrings = function(s, goal) {
    if (s.length !== goal.length) return false
    if (s === goal) {
        if ([...new Set(s.split(''))].length < goal.length) return true
        return false
    }
    let i = 0,
        j
    const s1 = s.split(''),
        goal1 = goal.split('')
    while (s1[i] === goal[i]) {
        i++
    }
    j = i + 1
    while (j < s.length && s1[j] === goal1[j]) {
        j++
    }
    if (j === s.length) return false
    if (s1[i] !== goal1[j] || s1[j] !== goal1[i]) return false
    j = j + 1
    while (j < s.length && s1[j] === goal1[j]) {
        j++
    }
    return j === s.length
};