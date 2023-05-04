/*
 * @Author: zhoulf
 * @FilePath: /cm-admin-base/src/core/use.js
 * @Date: 2022-06-01 14:35:20
 * @LastEditors: fastfan
 * @LastEditTime: 2023-02-22 09:46:50
 * @Description:
 */
import Vue from 'vue'

// UI Library
import cui from '@cci/cui'
import PCUi from '@cm/cm-pc-ui'
import '@cm/cm-pc-ui-theme/lib/index.css'
import './lazyUse'

// Lib Library
import { Storage } from '@cm/cm-lib'

// icons
import '@/icons'

// directive
import '@/directive/index'

Vue.prototype.$storage = new Storage('sessionStorage', 'dg-gas-web')
window.$storage = new Storage('sessionStorage', 'dg-gas-web')

Vue.use(cui)
Vue.use(PCUi)
