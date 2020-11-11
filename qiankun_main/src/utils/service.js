/* eslint-disable no-console */
import axios from 'axios';
import Vue from 'vue'
// 创建axios实例
const service = axios.create({
  timeout: 15000 // 请求超时时间
});

service.interceptors.request.use(function(config) {  //请求时的拦截器
  if (localStorage.getItem('token')) {
    config.headers.Authorization = localStorage.getItem('token');
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

service.interceptors.response.use((res) => { //请求完成后的拦截器
  return res;
}, (error) => {
  // 这里我们把错误信息扶正, 后面就不需要写 catch 了
  // return Promise.reject(error);
    if (error.response) {
      switch (error.response.status) {
        case 404:
          console.log('请求404');
          break;
        case 500:
          console.log('请求500');
          break;
      }
    }else{
      console.log(error)
      // return Promise.reject({ code: '-100', message: '网络异常请稍后再试！' })
      return Promise.reject(error);
    }
    
});

export default service;
