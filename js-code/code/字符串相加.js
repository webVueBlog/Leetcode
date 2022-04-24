/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 415.字符串相加 
 */
 var addStrings = function(num1, num2) {
  let len1 = num1.length
  let len2 = num2.length
  let i = len1 - 1
  let j = len2 - 1
  let carry = 0
  let ans = ''
  while(i>=0 || j>=0) {
      let cur1 = i < 0 ? 0 : num1[i] * 1
      let cur2 = j < 0 ? 0 : num2[j] * 1
      let {result, nextcarry} = add (cur1, cur2, carry)
      carry = nextcarry
      ans = result + ans
      i--
      j--
  }
  if(carry!==0) {
      ans = carry + ans
  }
  return ans
};

function add(n1, n2, lastCarry) {
  let result = 0
  let nextcarry = 0
  let num = n1 + n2 + lastCarry
  if(num >= 10) {
      let strnum = String(num)
      result = strnum.slice(1) * 1
      nextcarry = strnum.slice(0,1) * 1
  } else {
      result = num
  }
  return {
      result,
      nextcarry
  }
}

