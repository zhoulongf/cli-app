/*
 * @Author: fastfan
 * @Date: 2023-02-21 17:51:07
 * @LastEditors: fastfan
 * @LastEditTime: 2023-02-21 17:51:09
 * @Description: your description
 */
import axios from 'axios'
import store from '@/store'
export function createDownloadLink(option) {
  console.log(option, 'option')
  const { url, data, paramOnUrl = false } = option
  let requestUrl = url
  let requestData = data
  // 如果需要将参数放在url上
  if (paramOnUrl) {
    requestUrl = `${requestUrl}${objectToQuery(data)}`
    requestData = {}
  }
  axios({
    method: 'post',
    url: requestUrl,
    data: requestData,
    headers: {
      accessToken: store.getters.token,
      idaastoken: store.getters.idaastoken,
      Authorization: store.getters.token
    },
    responseType: 'blob'
  }).then(function (res) {
    let fileName = res.headers['content-disposition']
      .split(';')[1]
      .split('filename=')[1]
    fileName = decodeURIComponent(fileName)
    const url = window.URL.createObjectURL(new Blob([res.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
  })
}

// 转换参数
function objectToQuery() {
  const obj = arguments[0]
  const prefix = arguments[1]
  if (typeof obj !== 'object') return ''
  const attrs = Object.keys(obj)
  return attrs.reduce((query, attr, index) => {
    // 判断是否是第一层第一个循环
    if (index === 0 && !prefix) query += '?'
    if (typeof obj[attr] === 'object') {
      const subPrefix = prefix ? `${prefix}[${attr}]` : attr
      query += this.objectToQuery(obj[attr], subPrefix)
    } else {
      if (prefix) {
        query += `${prefix}[${attr}]=${obj[attr]}`
      } else {
        query += `${attr}=${obj[attr]}`
      }
    }
    // 判断是否是第一层最后一个循环
    if (index !== attrs.length - 1) query += '&'
    return query
  }, '')
}

export function download2({ url, params }) {
  // return
  let downLink = url
  if (params) downLink = `${downLink}${objectToQuery(params)}}`
  // 创建a标签，用于跳转至下载链接
  const tempLink = document.createElement('a')
  tempLink.style.display = 'none'
  tempLink.href = downLink
  // tempLink.setAttribute('download', '1.doc')
  // 兼容：某些浏览器不支持HTML5的download属性
  if (typeof tempLink.download === 'undefined') {
    tempLink.setAttribute('target', '_blank')
  }
  // 挂载a标签
  document.body.appendChild(tempLink)
  tempLink.click()
  document.body.removeChild(tempLink)
  // 释放blob URL地址
  window.URL.revokeObjectURL(url)
}
