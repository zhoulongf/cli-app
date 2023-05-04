{
  "name": "<%= name %>",
  "author": "zhoulf",
  "version": "1.1.6",
  "description": "cm-admin-base",
  "scripts": {
    "dev": "vue-cli-service serve --mode test",
    "build": "yarn clean && vue-cli-service build --mode test",
    "build:development": "yarn clean && vue-cli-service build --mode development",
    "build:production": "yarn clean && vue-cli-service build --mode production",
    "lint": "vue-cli-service lint",
    "cz": "git add . && git-cz",
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0 ",
    "postbuild": "node build/node/version.js",
    "new": "plop",
    "clean": "rimraf ./dist",
    "postinstall": "node build/node/checkver.js",
    "preview": "yarn build && http-server"
  },
  "dependencies": {
    "@cci/cp-form": "^1.1.4",
    "@cci/cp-frame-layout": "1.0.2",
    "@cci/cp-frame-layout-theme": "1.0.2",
    "@cm/cm-pc-ui": "^1.1.0",
    "@cm/cm-pc-ui-theme": "^1.1.0",
    "@cci/cp-select-time": "^1.0.11",
    "@cci/cp-svg-icon": "^1.0.6",
    "@cci/cp-wrap-table": "2.0.7",
    "@cm/cm-lib": "^1.0.1",
    "@cci/cui": "^2.0.2",
    "axios": "^0.19.0",
    "normalize.css": "^8.0.1",
    "nprogress": "^0.2.0",
    "vue": "^2.6.10",
    "vue-router": "^3.1.3",
    "vuex": "^3.6.2",
    "vuex-persist": "^3.1.3"
  },
  "devDependencies": {
    "@babel/eslint-parser": "^7.18.2",
    "@vue/babel-helper-vue-jsx-merge-props": "^1.2.1",
    "@vue/cli-plugin-babel": "^4.5.12",
    "@vue/cli-plugin-eslint": "^4.1.0",
    "@vue/cli-service": "^4.1.0",
    "@vue/eslint-config-standard": "4.0.0",
    "babel-eslint": "^10.0.3",
    "commitizen": "^4.2.3",
    "compression-webpack-plugin": "^5.0.1",
    "conventional-changelog-cli": "^2.2.2",
    "core-js": "^3.10.1",
    "cz-conventional-changelog": "^3.3.0",
    "eslint": "^5.16.0",
    "eslint-plugin-html": "^6.1.2",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-vue": "^5.0.0",
    "husky": "^4.3.6",
    "inquirer-file-tree-selection-prompt": "^1.0.7",
    "less": "^4.1.1",
    "less-loader": "^6.0.0",
    "lint-staged": "^10.5.3",
    "plop": "^2.7.4",
    "prettier": "^2.7.1",
    "prettier-eslint": "^15.0.1",
    "rimraf": "^3.0.2",
    "sass": "~1.26.5",
    "sass-loader": "^10.0.1",
    "svg-sprite-loader": "^4.1.6",
    "vue-eslint-parser": "^7.6.0",
    "vue-template-compiler": "^2.6.10"
  },
  "resolutions": {
    "@cci/cui": "2.0.2"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions"
  ],
  "config": {
    "commitizen": {
      "path": "node_modules/cz-conventional-changelog"
    }
  },
  "engines": {
    "node": "^12.0.0"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx,vue}": [
      "eslint --fix"
    ]
  }
}