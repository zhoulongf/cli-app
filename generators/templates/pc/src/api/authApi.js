/*
 * @Author: zhoulf
 * @FilePath: /dg-gas-web/src/api/authApi.js
 * @Date: 2021-12-17 17:02:20
 * @LastEditors: fastfan
 * @LastEditTime: 2023-02-22 11:32:52
 * @Description:
 */
import instance from '@/utils/request.js'
// 刷新token，当access_token过期时可调用刷新
function refreshToken(data) {
  return instance({
    method: 'post',
    url: `/dg-gas/api/tc/auth/refreshToken`,
    data
  })
}

// 统一获取三中心数据
function loginByCode(data) {
  // 代理根据自己项目的后端自己处理
  return instance({
    method: 'post',
    url: `/dg-gas/api/tc/auth/v2/loginByCode`,
    data
  })
}

// token 登录
function loginByAccessToken(data) {
  return instance({
    method: 'post',
    url: `/dg-gas/api/tc/auth/v2/loginByAccessToken`,
    data
  })
}

export { refreshToken, loginByCode, loginByAccessToken }
