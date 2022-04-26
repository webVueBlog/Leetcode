// console.log(new Array(2)) // [ <2 empty items> ]
// console.log(new Array(2).join('abc')) // abc
// console.log('123'.repeat(0)) // ''
// console.log('123'.repeat(1)) // 123

function repeat(s, n) {
 return (n > 0) ? s.concat(repeat(s, --n)) : ''
}

console.log(repeat('123', 0)) // ''
console.log(repeat('123', 1)) // ''

