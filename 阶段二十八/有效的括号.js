/**
 * @param {string} s
 * @return {boolean}
 20. 有效的括号
 */
var isValid = function(s) {
    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i])
            continue
        }
        const val = stack.pop()
        switch (s[i]) {
            case ')':
                if (val !== '(') {
                    return false
                }
                break
            case '}':
                if (val !== '{') {
                    return false
                }
                break
            case ']':
                if (val !== '[') {
                    return false
                }
                break
        }
    }
    return !stack.length
};