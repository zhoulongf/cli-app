import axios from 'axios'
import store from '@/store'
import { MessageBox } from '@cci/cui'
import qs from 'qs'
// import { getToken } from '@/utils/auth'
// function S4() {
//   return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
// }
// const toString = Object.prototype.toString;
// const LogPrefix = "XHR::::";
// axios.defaults.

// 存放当前请求未结束列表 key: 请求拼接字符串 , value:当前请求对应的 canel (取消)函数
const pendingRequest = new Map()
const CancelToken = axios.CancelToken
// 用于根据当前请求的信息，生成请求 Key
function generateReqKey(config) {
  const { method, url, params, data } = config
  return [method, url, qs.stringify(params), qs.stringify(data)].join('&')
}
// 把当前请求信息添加到pendingRequest对象中
function addPendingRequest(config) {
  const requestKey = generateReqKey(config)
  config.cancelToken =
    config.cancelToken ||
    new CancelToken((cancel) => {
      if (!pendingRequest.has(requestKey)) {
        pendingRequest.set(requestKey, cancel)
      }
    })
}
// 查是否存在重复请求，若存在则取消已发的请求
function removePendingRequest(config) {
  const requestKey = generateReqKey(config)
  if (pendingRequest.has(requestKey)) {
    const cancel = pendingRequest.get(requestKey)
    cancel(requestKey)
    pendingRequest.delete(requestKey)
  }
}

// 创建axios实例
const service = axios.create({
  timeout: 305000 // 请求超时时间
})

function isJSON(val) {
  if (typeof val !== 'string') {
    return false
  }
  try {
    const obj = JSON.parse(val)
    if (Object.prototype.toString.call(obj) === '[object Object]') {
      return true
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}

service.interceptors.request.use(
  (config) => {
    // const guid = S4()
    // const cTimeFlag = LogPrefix + guid + ' done -> ' + config.url
    // console.log(LogPrefix, guid, 'start', config.url)
    // console.time(cTimeFlag)
    // config.cTimeFlag = cTimeFlag
    // 检查是否存在重复请求，若存在则取消已发的请求
    removePendingRequest(config)
    // 把当前请求添加到pendingRequest对象中
    addPendingRequest(config)
    config.headers.accessToken = store.getters.token
    config.headers.idaastoken = store.getters.idaastoken
    config.headers.Authorization = store.getters.token // 让每个请求携带自定义token 请根据实际情况自行修改
    // config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    // if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded' && data && Object.prototype.toString.call(data) === '[object Object]') {
    //   data = qs.stringify(data)
    // }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// respone拦截器 处理数据
service.interceptors.response.use(
  (response) => {
    // 从pendingRequest对象中移除请求
    removePendingRequest(response.config)
    const { data } = response
    if (data.code && +data.code === 107) {
      MessageBox.alert(data.message, '提示', {
        callback: () => {
          store.dispatch('Logout').then((url) => {
            window.location.href = url
          })
        }
      })
    }
    const resData = isJSON(data) ? JSON.parse(data) : data
    if (typeof resData === 'object') {
      return resData
    } else {
      // console.log(LogPrefix, "原始请求:")
      // 针对返回 res 是二进制数据流
      return response
    }
  },
  (error) => {
    // console.log('err' + error)// for debug
    // 从pendingRequest对象中移除请求
    removePendingRequest(error.config || {})
    if (axios.isCancel(error)) {
      console.log('已取消的重复请求：')
    } else {
      // 添加异常处理
    }
    return Promise.reject(error)
  }
)

export default service
