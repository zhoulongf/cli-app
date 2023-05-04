/*
 * @Author: zhoulf
 * @FilePath: /cm-admin-base/src/store/getters.js
 * @Date: 2021-12-17 17:02:20
 * @LastEditors: fastfan
 * @LastEditTime: 2023-02-21 17:58:12
 * @Description:
 */
const getters = {
  token: (state) => state.user.token,
  idaastoken: (state) => state.user.idaastoken,
  isRefresh: (state) => state.user.isRefresh,
  tokenValid: (state) => state.token.tokenValid,
  menu: (state) => state.permission.menu,
  userData: (state) => state.user.userData
}
export default getters
