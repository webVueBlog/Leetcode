function formatNumber(n) {
  let num = n.toString()
  let decimals = ''
  num.indexOf('.') > -1 ? (decimals = num.split('.')[1]) : decimals
  let len = num.length
  if (len <= 3) {
    return num
  } else {
    let temp = ''
    let remainder = len % 3
    decimals ? (temp = '.' + decimals) : temp
    if (remainder > 0) {
      // 不是3的整数倍
      return (
        num.slice(0, remainder) +
        ',' +
        num.slice(remainder, len).match(/\d{3}/g).join(',') +
        temp
      )
    } else {
      // 是3的整数倍
      return num.slice(0, len).match(/\d{3}/g).join(',') + temp
    }
  }
}

console.log(formatNumber('12323.33'))
