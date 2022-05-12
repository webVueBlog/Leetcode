/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}

给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

整数除法仅保留整数部分。

输入：s = "3+2*2"
输出：7

输入：s = " 3/2 "
输出：1

输入：s = " 3+5 / 2 "
输出：5

 (80 ms)
 
 */
const calculate = (s) => {
 if (s == null || s.length === 0) return null;

 // remove space
 s = s.replace(/\s/g, '');

 let st = [];
 let n = 0;
 let sign = '+';

 for (let i = 0; i < s.length; i++) {
   const c = s[i];

   // number
   if (/\d/.test(c)) n = n * 10 + Number(c);  // '14' -> 1 * 10 + 4

   // sign or last number
   if (/\D/.test(c) || i === s.length - 1) {
     if (sign === '-') st.push(-n);
     else if (sign === '+') st.push(n);
     else if (sign === '*') st.push(st.pop() * n);
     else if (sign === '/') st.push(~~(st.pop() / n));

     sign = c;
     n = 0;
   }
 }
 return st.reduce((a, b) => a + b);
};
// @lc code=end

