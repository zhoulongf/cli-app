/*
 * @Author: zhoulf
 * @FilePath: /cm-admin-base/src/permission/permissionFactory.js
 * @Date: 2021-12-17 17:02:20
 * @LastEditors: fastfan
 * @LastEditTime: 2023-02-21 18:19:55
 * @Description:
 */
import store from '@/store'

import { PermissionTC } from './permissionTc'
import { PermissionOne } from './permissionOne'
import { isTestMode } from '@/utils'
import { addRoutes } from '@/router/generatorRouters'

const AuthType = {
  ONE: 'ONE', // 统一研发平台单点登陆
  TC: 'TC' // 三中心4.0用户体系使用者部门自己处理
}
/**
 * 创建权限模块实例
 * @param type
 * @returns {null}
 */
function initPermissionInstance(type) {
  // 测试模式，直接获取本地的静态路由
  if (isTestMode) {
    store.dispatch('GenerateRoutes').then(() => {
      addRoutes(store.getters.menu)
    })
  } else {
    let instance = null

    switch (type) {
      case AuthType.ONE: {
        instance = new PermissionOne()
        break
      }
      case AuthType.TC: {
        instance = new PermissionTC()
        break
      }
    }

    return instance
  }
}

export { initPermissionInstance, AuthType }
