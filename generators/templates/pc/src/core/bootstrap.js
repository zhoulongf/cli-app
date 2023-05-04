/*
 * @Author: zhoulf
 * @FilePath: /cm-admin-base/src/core/bootstrap.js
 * @Date: 2022-06-01 14:35:20
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-06-07 15:44:44
 * @Description:
 */
import watermark from '../utils/watarmark'
export default function Initializer() {
  // TODO 处理生命周期内的数据初始化，比如sessionStorage数据落入vuex

  // 设置水印
  watermark.set('cm-admin-base')
}
