/*
 * @Author: zhoulf
 * @FilePath: /vue-test/src/router/index.js
 * @Date: 2022-06-01 14:35:20
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-06-06 10:08:51
 * @Description:
 */
import Vue from 'vue'
import Router from 'vue-router'

import { createRouter } from './router'
import Layout from '../layout'

Vue.use(Router)

export default createRouter(Layout)
