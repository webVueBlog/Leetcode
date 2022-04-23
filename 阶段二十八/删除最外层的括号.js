/**
 * @param {string} s
 * @return {string}
 1021. 删除最外层的括号
 */
var removeOuterParentheses = function(s) {
    const stack = []
    let sign = 0
        // console.log('sign', sign++, sign, ++sign)
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' && sign++ > 0) {
            stack.push(s[i])
        }
        if (s[i] === ')' && sign-- > 1) {
            stack.push(s[i])
        }
    }
    return stack.join('')
};