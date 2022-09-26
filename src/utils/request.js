import axios from 'axios'
// import store from '@/store'
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// axios.interceptors.request.use(function(config) {
//   // 在发送请求之前做些什么
//   config.headers.Authorization = `Beaeer ${store.state.user.AuthCodeToken}`
//   return config
// }, function(error) {
//   // 对请求错误做些什么
//   return Promise.reject(error)
// })
export default request
