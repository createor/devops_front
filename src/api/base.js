// 基本实例
import axios from 'axios'
import router from '../router'

// axios实例创建
export const instance = axios.create({
  baseURL: 'http://116.205.190.209:90',
  // 超时时间
  timeout: 5000
})

// 默认头部设置
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
// 头部携带token,默认取浏览器存储的值
axios.defaults.headers.common['Authorization'] = 'Bearer' + window.localStorage.getItem('token')

// 创建拦截器
// config:请求实例
instance.interceptors.request.use((config) => {
  let token = window.localStorage.getItem('token')
  if (token) {
    // token存在
    config.headers.Authorization = 'Bear ' + token
  }
  return config
}, (err) => {
  return Promise.reject(err)
})

// 创建响应拦截器
instance.interceptors.response.use((resp) => {
  return resp
}, (err) => {
  if (err.response) {
    switch (err.response.status) {
      // 跳转到404页面
      case 404:
        router.replace({
          path: '/404'
        })
    }
  }
  return Promise.reject(err.response)
})

export default instance
