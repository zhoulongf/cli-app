/*
 * @Author: zhoulf
 * @FilePath: /cm-admin-base/src/main.js
 * @Date: 2022-06-01 18:16:29
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-06-09 14:34:49
 * @Description:
 */
import Vue from 'vue'
import './core/use'
import bootstrap from './core/bootstrap'
import router from '@/router'
import App from './app'
import store from '@/store'
import 'normalize.css/normalize.css'
import './styles/index.scss'
import { initPermissionInstance, AuthType } from '@/permission/permissionFactory'
Vue.config.productionTip = false
initPermissionInstance(AuthType.TC)
const init = function() {
  // eslint-disable-next-line no-new
  new Vue({
    el: '#app',
    router,
    created: bootstrap,
    store,
    render: h => h(App)
  })
}
init()
