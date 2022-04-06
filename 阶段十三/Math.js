/**
 * 

1. Math 对象属性

Math.E 自然对数的基数 e 的值
Math.LN10 10 为底的自然对数
Math.LN2 2 为底的自然对数
Math.LOG2E 以 2 为底 e 的对数
Math.LOG10E 以 10 为底 e 的对数
Math.PI π 的值
Math.SQRT1_2 1/2 的平方根
Math.SQRT2 2 的平方根

2. min()和 max()方法

3. 舍入方法
Math.ceil()方法始终向上舍入为最接近的整数。
Math.floor()方法始终向下舍入为最接近的整数
Math.round()方法执行四舍五入。
Math.fround()方法返回数值最接近的单精度（32 位）浮点值表示。

console.log(Math.ceil(25.9)); // 26 
console.log(Math.ceil(25.5)); // 26 
console.log(Math.ceil(25.1)); // 26 
console.log(Math.round(25.9)); // 26 
console.log(Math.round(25.5)); // 26 
console.log(Math.round(25.1)); // 25 
console.log(Math.fround(0.4)); // 0.4000000059604645 
console.log(Math.fround(0.5)); // 0.5 
console.log(Math.fround(25.9)); // 25.899999618530273 
console.log(Math.floor(25.9)); // 25 
console.log(Math.floor(25.5)); // 25 
console.log(Math.floor(25.1)); // 25

4. random()方法
Math.random()方法返回一个 0~1 范围内的随机数，其中包含 0 但不包含 1。

Math.abs(x) 返回 x 的绝对值
Math.exp(x) 返回 Math.E 的 x 次幂
Math.expm1(x) 等于 Math.exp(x) - 1
Math.log(x) 返回 x 的自然对数
Math.log1p(x) 等于 1 + Math.log(x)
Math.pow(x, power) 返回 x 的 power 次幂
Math.hypot(...nums) 返回 nums 中每个数平方和的平方根
Math.clz32(x) 返回 32 位整数 x 的前置零的数量
Math.sign(x) 返回表示 x 符号的 1、0、-0 或-1
Math.trunc(x) 返回 x 的整数部分，删除所有小数
Math.sqrt(x) 返回 x 的平方根
Math.cbrt(x) 返回 x 的立方根
Math.acos(x) 返回 x 的反余弦
Math.acosh(x) 返回 x 的反双曲余弦
Math.asin(x) 返回 x 的反正弦
Math.asinh(x) 返回 x 的反双曲正弦
Math.atan(x) 返回 x 的反正切
Math.atanh(x) 返回 x 的反双曲正切
Math.atan2(y, x) 返回 y/x 的反正切
Math.cos(x) 返回 x 的余弦
Math.sin(x) 返回 x 的正弦
Math.tan(x) 返回 x 的正切


*/