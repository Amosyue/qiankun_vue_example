
const path = require('path');
let proxy = require('./proxy');
function resolve(dir) {
  return path.join(__dirname, dir);
}


const port = 9999; // dev port
// let styleVariables = require('./src/style/variables.scss.js');

module.exports = {
  // publicPath: './',
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
    },
    proxy: proxy
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        '@static': resolve('static')
      }
    },
    devtool:'eval-cheap-source-map',
    externals: {
      'vue': 'Vue',
      'vue-router':'VueRouter',
      // 'vuex':'Vuex',
      'element-ui': 'ELEMENT',
      // 'axios': 'axios',
      // 'jquery': 'jQuery',
      // 'lodash' : '_'
    },
  },
  css: {
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
        importLoaders: 1,
      },
      sass: {
        // prependData: Object.keys(styleVariables)
        //   .map(k => `\$${k.replace('_', '-')}: ${styleVariables[k]};`)
        //   .join('\n')
      }
    }
  }
};
