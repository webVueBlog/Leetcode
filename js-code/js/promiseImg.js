// 用Promise实现图片的异步加载

let imageAsync = (url) => {
 return new Promise((resolve, reject) => {
  let img = new Image();
  img.src = url
  img.onload = () => {
   console.log('成功')
   resolve(Image)
  }
  img.onerror = (err) => {
   console.log('失败')
   reject(err)
  }
 })
}

imageAsync('url').then(() => {
 console.log('加载成功')
}).catch((error) => {
 console.log('加载失败')
})