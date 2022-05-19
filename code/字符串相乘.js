/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 43. 字符串相乘
 */
var multiply = function(num1, num2) {
    let len2 = num2.length;
    let sum = []
    for (let i = len2 - 1; i >= 0; i--) {
        let fill = len2 - i - 1
        let product = multi(num1, num2[i], fill)
        sum.push(product)
    }
    let result = sum.reduce((prev, next) => {
        return addStrings(prev, next)
    })
    while (result.length > 1 && result[0] === '0') {
        result = result.slice(1)
    }
    return result
};

function multi(n1, n2, fill) {
    fill = fill >= 0 ? fill : 0
    let carry = 0
    let result = ''
    let i = n1.length - 1
    while (i >= 0) {
        let curr = n1[i]
        let product = Number(curr) * Number(n2) + carry;
        if (product >= 10) {
            let strPro = String(product)
            carry = strPro[0] * 1
            result = strPro[1] + result
        } else {
            carry = 0
            result = product + result
        }
        i--
    }
    if (carry !== 0) {
        result = carry + result
    }
    return result + '0'.repeat(fill)
}

var addStrings = function(num1, num2) {
    let len1 = num1.length
    let len2 = num2.length
    let i = len1 - 1
    let j = len2 - 1
    let carry = 0
    let ans = ''
    while (i >= 0 || j >= 0) {
        let cur1 = i < 0 ? 0 : num1[i] * 1
        let cur2 = j < 0 ? 0 : num2[j] * 1
        let { result, nextCarry } = add(cur1, cur2, carry)
        carry = nextCarry
        ans = result + ans
        i--
        j--
    }
    if (carry !== 0) {
        ans = carry + ans
    }
    return ans
}

function add(n1, n2, lastCarry) {
    let result = 0
    let nextCarry = 0
    let num = n1 + n2 + lastCarry
    if (num >= 10) {
        let strnum = String(num)
        result = strnum.slice(1) * 1
        nextCarry = strnum.slice(0, 1) * 1
    } else {
        result = num
    }
    return {
        result,
        nextCarry
    }
}