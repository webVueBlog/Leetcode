/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * 剑指 Offer 16. 数值的整数次方
 * pow(2*2, 5) p(2,4) * 2 p(2,2) * pow(2,2) pow(2,1) * pow(2,1)
 */
var myPow = function(x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;
    if (n < 0) return 1 / myPow(x, -n);

    if (n % 2 !== 0) {
        return x * myPow(x, n - 1);
    }
    return myPow(x * x, n / 2);
};