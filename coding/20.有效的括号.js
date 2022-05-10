/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。

提示：

1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成

示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false

"()[]{}".charAt(1);
')'

'('，')'，'{'，'}'，'['，']'
 (68 ms)
 */
var isValid = function(s) {
 const stack = [];
 // push
 for(let i = 0; i < s.length; i++) {
  // 获取当前字符串的值
  let c = s.charAt(i);
  // switch比较 )
  switch(c) {
   case '(': stack.push(')');
    break;
   case '[': stack.push(']');
    break;
   case '{': stack.push('}');
    break;
   default:
    if(c !== stack.pop()) {
     return false;
    }
  }
 }
 return stack.length === 0;
};
// @lc code=end

