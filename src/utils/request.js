
import axios from 'axios'
import { Notification } from 'element-ui'


// 创建axios实例
const request = axios.create({
  // 默认请求路径前缀
  baseURL: process.env.VUE_APP_API_BASE_URL,
  // 超时时间
  timeout: 6000
})
// 异常拦截处理
const errorHandler = (error) => {
  console.log(error.response.status)
  if(error.response) {
    const data = error.response.data
    if(error.response.status === 403) {
      Notification({
        title: '错误',
        message: data.message,
        type: 'error'
      })
    }
  }
  return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use(config => {
  return config
},errorHandler)

// respones interceptor
request.interceptors.response.use(response => {
  return response.data
},errorHandler)

export default request
