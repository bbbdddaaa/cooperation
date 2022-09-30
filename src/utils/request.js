import axios from 'axios'
import store from '@/store'
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

request.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  config.headers.Authorization = `${store.getters.token}`
  return config
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
export default request
