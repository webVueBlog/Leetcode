/**
# 安装
npm install axios -D //保存到依赖里

# 项目引入
import axios from 'axios';
var axios = require('axios');

创建实例 axios.create([config])

// 添加请求拦截器  所有请求前都在这里
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么 例如loading
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器  所有请求响应后都在这里
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });


如果你想在稍后移除拦截器，可以这样：

可以为自定义 axios 实例添加拦截器

const instance = axios.create();  
instance.interceptors.request.use(function () {/\*...\*/});


 */

const myInterceptor = axios.interceptors.request.use(function () {/\*...\*/});  
axios.interceptors.request.eject(myInterceptor);  