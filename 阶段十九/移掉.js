/**
 * @param {string} num
 * @param {number} k
 * @return {string}
402. 移掉 K 位数字
 num = "1432219", k = 3 2 1 0

 [1,2,1,9]

 982 k=1
 892 k=1

 3044

 9 k=1
 9876 k=3
 */
var removeKdigits = function(num, k) {
    let stack = [];
    let len = num.length;
    for(let i = 0; i < len; i++) {
        let current = num[i];
        while(k > 0 && stack.length > 0 && current < stack[stack.length - 1]) {
            stack.pop();
            k--;
        }
        stack.push(current);
    }
    while (k > 0) {
        stack.pop();
        k--
    }
    while(stack.length > 0 && stack[0] === '0') {
        stack.shift();
    }
    return stack.length > 0 ? stack.join('') : '0'
};