/*
 * @Author: zhoulf
 * @FilePath: /cm-admin-base/src/store/modules/permission.js
 * @Date: 2021-12-17 17:02:20
 * @LastEditors: fastfan
 * @LastEditTime: 2023-02-21 17:58:39
 * @Description:
 */

import { asyncRouterMap } from '@/router/statics/config'

import { isTestMode } from '@/utils'

const state = {
  menu: []
}

const mutations = {
  SET_MENU: (state, menu) => {
    state.menu = menu
  }
}
const actions = {
  /**
   * @Author: zhoulf
   * @description:获取权限
   * @return {*}
   */
  GenerateRoutes({ commit }, menu = []) {
    if (isTestMode) {
      return new Promise((resolve) => {
        commit('SET_MENU', asyncRouterMap)
        resolve()
      })
    } else {
      return new Promise((resolve) => {
        commit('SET_MENU', menu)
        resolve()
      })
    }
  },
  /**
   * 清空路由菜单
   * @param commit
   * @constructor
   */
  RemoveRoutes({ commit }) {
    return new Promise((resolve) => {
      commit('SET_MENU', [])
      resolve()
    })
  }
}

export default {
  // namespaced: true,
  state,
  mutations,
  actions
}
