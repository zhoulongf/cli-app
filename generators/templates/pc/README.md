<!--
 * @Author: zhoulf
 * @FilePath: /cm-admin-base/README.md
 * @Date: 2021-12-17 17:02:20
 * @LastEditors: zhoulf
 * @LastEditTime: 2022-06-13 11:58:32
 * @Description: 
-->
# cm-admin-base

## 介绍

城管PC端管理端脚手架项目

## 文档相关
[cui](http://10.12.102.194/cui/#/zh-CN/installation)
[cm-ui](http://10.12.107.126:7301)
[cm-lib](http://10.12.107.126:7303)
[cm-admin-layout](http://10.12.107.126:7305)
[cm-pc-ui](http://10.12.107.48:8109/cmui) 
[前端代码规范](https://docs.qq.com/pdf/DTVlZWWpPTEdORXVR?)
## 优化点

- plop模版代码生成脚手架及模版
- layout：集成三中心统一layout布局
- 添加了husky代码提交规范
- eslint遵循公司前端代码规范
- 添加preview,build之后可以直接本地起一个服务
- 添加404页面
- 移除node-sass，使用dart-sas
- 移除生产环境使用cdn
- 移除easy-mock，统一采用yapi和自己项目后端约定好
- 移除前端对接三中心方案，统一采用后端对接三中心
## Project setup

```
yarn
```

### Compiles and hot-reloads for development

```
yarn dev
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 添加node版本锁定，推荐使用yarn
- yarn 可以直接使用
- npm 在执行npm i的时候会检测node版本
