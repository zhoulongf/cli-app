/*
 * @Author: zhoulf
 * @FilePath: /cm-admin-base/src/store/modules/user.js
 * @Date: 2022-06-07 20:14:24
 * @LastEditors: fastfan
 * @LastEditTime: 2023-02-22 11:35:02
 * @Description:
 */
import { tagsViewMutations } from '@cci/cp-frame-layout'
import {
  // getProjectFunsByCodeAndProjectId,
  loginByCode,
  refreshToken
} from '@/api/authApi'
function setMenuChildren(v) {
  return v.map((i) => {
    if (!i.children) {
      i.children = []
    } else {
      i.children = setMenuChildren(i.children)
    }
    return i
  })
}

/** userstore模块 */
const state = {
  token: window.$storage.get('token') || '', // 用户令牌
  userData: window.$storage.get('userData') || '',
  isRefresh: false, // 是否刷新
  idaastoken: '' // 统一认证token
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
    window.$storage.save('token', token)
  },

  SET_REFRESH_TOKEN: (state, token) => {
    state.refreshToken = token
  },

  SET_USERDATA: (state, userData) => {
    state.userData = userData
    window.$storage.save('userData', userData)
  },
  SET_IDAASTOKEN: (state, token) => {
    state.idaastoken = token
  }
}

const actions = {
  /**
   * 刷新token
   * @param commit
   * @param state
   * @constructor
   */
  // GetUserInfo
  // eslint-disable-next-line no-unused-vars
  GetUserInfo({ commit, dispatch }, params) {
    return new Promise((resolve, reject) => {
      loginByCode({ ...params })
        .then(({ data: { loginUser = {}, accessToken = '' } }) => {
          const user = {
            currentSiteId: loginUser.project.projectId,
            currentSiteName: loginUser.project.projectName,
            deptId: loginUser.deptment.deptId,
            deptName: loginUser.deptment.deptName,
            fullPath: '',
            groupId: loginUser.user.groupId,
            groupName: '',
            groupNo: '',
            ownRoles: loginUser.tcRoleList,
            platformId: '',
            userGrade: loginUser.user.userGrade,
            userId: loginUser.user.userId,
            userName: loginUser.user.userName,
            userNo: loginUser.user.userNo
          }

          commit('SET_TOKEN', accessToken)
          // commit('SET_TOKEN_VALID')
          commit('SET_USERDATA', user)
          commit('SET_IS_REFRESH')
          resolve(setMenuChildren(loginUser.projectFunctionList))
        })
        .catch((err) => reject(err))
    })
  },
  // 刷新获取新的token以及用户信息
  // eslint-disable-next-line no-unused-vars
  GetUserInfoByToken({ commit, dispatch }, data) {
    return new Promise((resolve, reject) => {
      refreshToken({ ...data })
        .then(({ data: { loginUser = {}, accessToken = '' } }) => {
          const user = {
            currentSiteId: loginUser.project.projectId,
            currentSiteName: loginUser.project.projectName,
            deptId: loginUser.deptment.deptId,
            deptName: loginUser.deptment.deptName,
            fullPath: '',
            groupId: loginUser.user.groupId,
            groupName: '',
            groupNo: '',
            ownRoles: loginUser.tcRoleList,
            platformId: '',
            userGrade: loginUser.user.userGrade,
            userId: loginUser.user.userId,
            userName: loginUser.user.userName,
            userNo: loginUser.user.userNo
          }

          commit('SET_TOKEN', accessToken)
          // commit('SET_TOKEN_VALID')
          commit('SET_USERDATA', user)
          commit('SET_IS_REFRESH')
          resolve(setMenuChildren(loginUser.projectFunctionList))
        })
        .catch((err) => reject(err))
    })
  },

  /**
   * 退出登陆
   * @param commit
   * @param useLogoutApi
   * @constructor
   */
  Logout({ commit }) {
    return new Promise((resolve) => {
      tagsViewMutations.enabled(false)
      tagsViewMutations.enableCache(false)
      commit('SET_TOKEN', '')
      commit('SET_USERDATA', {})
      resolve(process.env.VUE_APP_NAVIGATION_URL)
    })
  }
}

export default {
  // namespaced: true,
  state,
  mutations,
  actions
}
