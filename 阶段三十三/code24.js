console.log(1)

setTimeout(() => {
  console.log(2)
})

new Promise(resolve =>  {
  console.log(3)
  resolve(4)
}).then(d => console.log(d))

setTimeout(() => {
  console.log(5)
  new Promise(resolve =>  {
    resolve(6)
  }).then(d => console.log(d))
})

setTimeout(() => {
  console.log(7)
})

console.log(8)

// 1
// 3
// 8
// 4
// 2
// 5
// 6
// 7