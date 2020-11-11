import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
if (process.env.NODE_ENV !== 'production') {
  require('./mock/index')
}

// 导入主应用JS工具库
import utils from "./utils/index.js";
// 导入主应用组件库
import componentsUi from "./components/index.js";

//vue挂载全局方法，主项目使用
Object.keys(utils).forEach(val => {
  Vue.prototype['$' + val] = utils[val]
})

// // 封装localstorage
// import storage from './utils/localstorage'
// window._storage = storage
// 导入主应用ui库


Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


window.a = 1000;

// 导入乾坤函数
import {
  registerMicroApps, // 注册子应用方法
  setDefaultMountApp, // 设默认启用的子应用
  runAfterFirstMounted, // 有个子应用加载完毕回调
  start, // 启动qiankun
  addGlobalUncaughtErrorHandler, // 添加全局未捕获异常处理器
  initGlobalState, // 官方应用间通信
} from "qiankun";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#rootApp')

function genActiveRule(routerPrefix) {
  return location => location.hash.startsWith('#' + routerPrefix)
}

registerMicroApps([{
  name: 'qiankun_child1',
  entry: 'http://localhost:8888',
  container: '#childContainer',
  activeRule: genActiveRule('/qiankun_child1'),
  props: {
    data: {
      store,
      router,
      name: 'huangyue',
    },
    components:componentsUi,
    utils: utils,
  }
}], {
  beforeLoad: [
    app => {
      console.log("before load", app);
    }
  ], // 挂载前回调
  beforeMount: [
    app => {
      console.log("before mount", app);
    }
  ], // 挂载后回调
  afterUnmount: [
    app => {
      console.log("after unload", app);
    }
  ] // 卸载后回调
});


// 初始化 state
let state = {data:{'userName':'admin'}}
const actions = initGlobalState(state);
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});
actions.setGlobalState(state);
actions.offGlobalStateChange();
Vue.prototype.$actions = actions


// setDefaultMountApp('/qiankun_child1')
// 启动微服务
start({
  prefetch: true,
  sandbox: {
    // strictStyleIsolation: true // 表示开启严格的样式隔离模式,这个地方开启的话父项目传递到子项目的组件样式出不来
  }
})

// 第一个子应用加载完毕回调
//  runAfterFirstMounted((app) => {
//   console.info('first app mounted')
//   console.log(app)
// });

// // 设置全局未捕获一场处理器
// addGlobalUncaughtErrorHandler(event => console.log(event));