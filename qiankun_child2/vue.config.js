
const port = 7777; // dev port

const path = require('path');
// const { name } = require('./package');
const packageName = require('./package.json').name;

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // publicPath: '/',
  lintOnSave: false,
  devServer: {
    // host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  // 自定义webpack配置
  configureWebpack: {
    devtool:'eval-cheap-source-map',
    resolve: {
      alias: {
        '@': resolve('src')
      },
    },
    externals: {
      'vue': 'Vue',
      'vue-router':'VueRouter',
      // 'vuex':'Vuex',
      'element-ui': 'ELEMENT',
      // 'axios': 'axios',
      // 'jquery': 'jQuery',
      // 'lodash' : '_'
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `qiankun_child2-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    },
  },
};
