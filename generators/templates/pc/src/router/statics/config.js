/*
 * @Author: zhoulf
 * @FilePath: /create-cm-cli-app/generators/templates/pc/src/router/statics/config.js
 * @Date: 2022-07-07 17:50:46
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-07-18 17:45:26
 * @Description:
 */

/**
 * @Author: zhoulf
 * @description:前端动态路由
 * @return {*}
 */
export const asyncRouterMap = [
  {
    id: 'BASP',
    text: 'CM-UI示例',
    icon: '',
    leaf: false,
    expanded: true,
    children: [
      {
        id: 'DEMO',
        text: 'DEMO',
        icon: 'el-icon-success',
        leaf: false,
        expanded: true,
        children: [
          {
            id: 'NEWSEARCH',
            text: '搜索表单',
            leaf: true,
            url: '/cm-search-form',
            nodeType: 2 // 2:页面 3:按钮
          },
          {
            id: 'NEWSEARCHTABLE',
            text: '搜索表格',
            leaf: true,
            url: '/cm-search-table',
            nodeType: 2 // 2:页面 3:按钮
          }
        ]
      }
    ]
  },
  {
    id: 'JS_YYWH',
    text: 'iframe加载',
    icon: '',
    leaf: false,
    expanded: true,
    nodeType: 1,
    url: '/iframe/http://10.12.107.126:7305/#/navigate',
    systemType: 0
  },
  {
    id: 'JS_YYWHZ',
    text: '外链加载',
    icon: '',
    leaf: false,
    expanded: true,
    nodeType: 1,
    url: '/JUMP/http://10.12.107.48:8109/cmui/#/',
    systemType: 0
  }
]
