/**
 * @param {string} s
 * @return {number}
 224. 基本计算器

' '
'-'
'+'
'('
')'
'number'

 (1+(4+5+2)-3)+(6+8)
 i
  i
  符号：1 // 1加 -1减
  当前的运算结果：0

145

[0, '1']
// 先往栈中压入1，假设在每个式子前面加上不影响操作结果的“+”
// “+”用1表示，'-'用-1表示
// 遇到'('压入运算符,遇到数字，使用栈顶运算符计算

  4-2 // 4+ -2
 */
var calculate = function(s) {
    const sign = [1]
    let sum = 0, op = 1, n = 0 // op当前运算符号
    // n为了把字符串转变number
    for(let i = 0; i < s.length; i++) {
        if(s[i] === ' ') continue
        if(s[i] - '0' >= 0 && s[i] - '0' <= 9) {
            n = n * 10 + s[i] * 1
            continue
        }
        sum += op * n
        n = 0
        if(s[i] === '-') op = -sign[sign.length - 1]
        if(s[i] === '+') op = sign[sign.length - 1]
        if(s[i] === '(') sign.push(op)
        if(s[i] === ')') sign.pop()
    }
    sum += op * n
    return sum;
};











