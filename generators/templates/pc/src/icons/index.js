/*
 * @Author: zhoulf
 * @FilePath: /vue-test/src/icons/index.js
 * @Date: 2022-06-06 09:50:50
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-06-06 09:50:58
 * @Description:
 */
import Vue from 'vue'
import SvgIcon from '@cci/cp-svg-icon' // svg组件

// register globally
Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
