/**
 * @param {string} s
 * @return {string}
 316. 去除重复字母 
 cbabca
 [c] b // [b]
 [a,b,c]
 
"bcabc"
[b,c,a]
"cbacdcbc"
[a]
"ecbacba"

cbabc // cbab
 i
 [c] // abcdef
 v = s[i] < stack.[stack.length-1]
 如果当前字符比栈顶字符小，删除栈顶(i指针后面还有栈顶字符)
 */
var removeDuplicateLetters = function(s) {
    let stack = [];
    const countMap = {};
    const exist = {};
    const n = s.length;
    for(let i = 0; i < n; i++) {
        const v = s[i];
        if(countMap[v] === undefined) {
            countMap[v] = 0;
        }
        countMap[v]++;
    }
    for(let i = 0; i<n; i++) {
        const v = s[i];
        countMap[v]--;
        if(exist[v]) {
            continue;
        }
        while(stack.length && stack[stack.length-1] > v) {
            if(countMap[stack[stack.length-1]] === 0) {
                break;
            }
            exist[stack.pop()] = false
        }
        stack.push(v);
        exist[v] = true;
    }
    return stack.join('');
};