import Vue from 'vue'
import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:8080/api'
})

// 拦截器
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

Vue.prototype.$http = axios
export default service
