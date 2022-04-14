/**
 * @param {number[]} nums
 * @return {number}
 413. 等差数列划分
 dp[i]以i为结尾的等差子数组的个数
 索引
 123 234 1234
[1,2,3]
 234 1234 // 34
 2345 12345 345
 [1,2,3,4,5,6]
      1 3 6 10
      123 // dp[2] 1
      234 1234 // dp[3] 2
      2345 12345 345 // dp[4] 3 6
      23456 123456 3456 456 // dp[5] 4 10
 */
var numberOfArithmeticSlices = function(A) {
    let len = A.length;
    let dp = new Array(len).fill(0);
    let ans = 0;
    for(let i = 2; i < len; i++) {
        if(A[i] - A[i-1] === A[i-1] - A[i-2]) {
            dp[i] = dp[i-1] + 1;
            ans += dp[i];
        }
    }
    return ans;
};

// var numberOfArithmeticSlices = function(A) {
//     let ans = 0,
//     dp = new Array(A.length).fill(0);
//     for(let i = 2, ALen = A.length; i < ALen; i++) {
//         if(A[i]-A[i-1] === A[i-1]-A[i-2]) {
//             dp[i] = dp[i-1] + 1;
//             ans += dp[i];
//         }
//     }
//     return ans;
// };