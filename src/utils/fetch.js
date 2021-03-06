import axios from 'axios'

var instance = axios.create({
//   baseURL: 'https://cnodejs.org/api/v1',
  timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  config.headers.admin_token = 'admin'
  return config
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(response => {
  // 对响应数据做点什么
  return response
}, error => {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default instance
