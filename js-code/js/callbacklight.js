// red 3s yellow 2s green 1s light
// 红色三秒打印一次、绿色两秒打印一次、黄色一秒打印一次
function red() {
 console.log('red')
}
function green() {
 console.log('green')
}
function yellow() {
 console.log('yellow')
}

const task = (timer, light, callback) => {
 setTimeout(() => {
  if(light === 'red') {
   red()
  } else if(light === 'green') {
   green()
  } else if(light === 'yellow') {
   yellow()
  }
  callback()
 }, timer)
}

const step = () => {
 task(3000, 'red', ()=>{
  task(2000, 'green', ()=>{
   task(1000, 'yellow', step)
  })
 })
}

step()