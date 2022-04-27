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

const task = (timer, light) => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (light === 'red') {
                red()
            }
            else if (light === 'green') {
                green()
            }
            else if (light === 'yellow') {
                yellow()
            }
            resolve()
        }, timer)
    })

const taskRunner = async() => {
 await task(3000, 'red')
 await task(2000, 'green')
 await task(1000, 'yellow')
 taskRunner()
}

taskRunner()