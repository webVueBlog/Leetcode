
// localstorge 利用浏览器的本地存储可以缓存信息 ，在创建数据的时候引入创建好的数据

// cookie 好像也可以

// manifest 可以标记一些缓存资源，在离线的时候使用

//增加

localStorage.setItem('myCat', 'Tom');

//获取

let cat = localStorage.getItem('myCat');

//删除所有

localStorage.clear();

优点:

没有网络时可以浏览,加快资源的加载速度,减少服务器负载

使用:

只需要在页面头部加入,然后创建manifest.appcache文件

manifest.appcache文件配置:

- 1)CACHE MANIFEST放在第一行
- 2)CACHE:表示需要离线存储的资源列表,由于包含manifest文件的页面将被自动离线存储,所以不需要列出来
- 3)NETWORK:表示在线才能访问的资源列表,如果CACHE列表里也存在,则CACHE优先级更高
- 4)FALLBACK:表示如果访问第一个资源是吧,那么使用第二个资源来替换它

浏览器如何解析manifest

1. 在线情况:浏览器发现html头部有manifest属性,他会请求manifest文件,如果是第一次访问,那么浏览器会根据manifest文件的内容下载相应的资源并且进行离线存储.如果已经访问过并存储,那么浏览器使用 离线的资源价值,然后对比新的文件,如果没有发生改变就不做任何操作,如果文件改变了,那么就会重新下载文件中的资源并进行离线存储
2. 离线情况:浏览器就直接使用离线存储资源

状态 window.applicationCache对象的status属性

- 0:无缓存
- 1:闲置
- 2.检查中,正在下载描述文件并检查更新
- 3:下载中
- 4:更新完成
- 5:废弃,应用缓存的描述文件已经不存在了,因此页面无法再访问应用缓存

