
// 1. 通过call调用数组的slice方法来实现转换
Array.prototype.slice.call(arrayLike);

// 2. 通过call调用数组的splice方法来实现转换

Array.prototype.splice.call(arrayLike, 0)

// 3. 通过apply调用数组的concat方法来实现转换

Array.prototype.concat.apply([], arrayLike);

// 4. Array.from方法来实现转换

Array.from(arrayLike)