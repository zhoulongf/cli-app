/*
 * @Author: zhoulf
 * @FilePath: /cm-admin-base/src/store/index.js
 * @Date: 2022-06-01 14:35:20
 * @LastEditors: fastfan
 * @LastEditTime: 2023-02-22 11:35:54
 * @Description:
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import permission from './modules/permission'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    permission
  },
  state: {},
  mutations: {},
  actions: {},
  getters
})

export default store
