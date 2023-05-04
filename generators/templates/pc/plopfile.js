/*
 * @Author: zhoulf
 * @FilePath: /cm-admin-base/plopfile.js
 * @Date: 2022-06-06 18:58:06
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-06-09 15:33:52
 * @Description:
 */
const storeGenerator = require('./plop-templates/store/prompt.js')
const viewGenerator = require('./plop-templates/view/prompt.js')
const inquirerFileTreeSelection = require('inquirer-file-tree-selection-prompt')
module.exports = function(plop) {
  plop.setPrompt('file-tree-selection', inquirerFileTreeSelection)
  plop.setGenerator('store', storeGenerator)
  plop.setGenerator('view', viewGenerator)
}
