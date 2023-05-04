/*
 * @Author: zhoulf
 * @FilePath: /cm-admin-base/src/directive/ellipsis.js
 * @Date: 2022-06-01 14:35:20
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-06-08 11:05:53
 * @Description:使用该指令当文字内容超出宽度（默认100 px）时自动变为省略形式。等同于使用 css
 */

export default function (el, binding) {
  el.style.width = binding.arg || 100 + 'px'
  el.style.whiteSpace = 'nowrap'
  el.style.overflow = 'hidden'
  el.style.textOverflow = 'ellipsis'
}
