/*
 * @Author: zhoulf
 * @FilePath: /cm-admin-base/src/router/router.js
 * @Date: 2022-06-01 14:35:20
 * @LastEditors: fastfan
 * @LastEditTime: 2023-02-22 11:34:40
 * @Description:
 */
import Router from 'vue-router'
import { injectDefaultRoute } from '@cci/cp-frame-layout'
export function createRouter(layoutComponent) {
  return new Router({
    base: process.env.VUE_APP_BASEURL,
    mode: 'history',
    routes: [...injectDefaultRoute(layoutComponent)]
  })
}
