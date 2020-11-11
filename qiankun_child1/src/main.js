import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueRouter from 'vue-router';
import routes from './router'
import store from './store'
// import './public-path';

Vue.config.productionTip = false

console.log("*****************子项目测试window*****************")
console.log(window.huangyue)
let router = null;
let instance = null;

function render(state,props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/qiankun_child1' : '/',
    mode: 'hash',
    routes,
  });

  instance = new Vue({
    router,
    store,
    // render: h => h(App),
    render: h => h(App, {
        props: {...state }
    })
  }).$mount(container ? container.querySelector('#app') : '#app');
}



window.huangyue = {
  setNane:'sssd'
}
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

function storeTest(props) {
  Vue.prototype.$onGlobalStateChange = props.onGlobalStateChange
  Vue.prototype.$setGlobalState = props.setGlobalState
}
// //测试全局变量污染
// window.a = 1;
export async function bootstrap(data) {
  console.log("***************进入child1项目bootstrap******************")
  console.log(data);
}
export async function mount(props) {
  // 注册父项目下发的组件
  Vue.use(props.components)
  // 挂载主项目传递过来的全局方法
  let _utils = {}
  Object.keys(props.utils).forEach(i => {
    _utils[i] = props.utils[i]
  });
  Vue.prototype.$mainUtils = _utils
  console.log("***************进入child1项目mount******************")
  console.log(props);
  render(props.data.store,props);
  storeTest(props);
  // 测试一下 body 的事件，不会被沙箱移除
  document.body.addEventListener('click', e => console.log('document.body.addEventListener'))
  document.body.onclick = e => console.log('document.body.addEventListener')


  // props.onGlobalStateChange((state, prev) => {
  //   // state: 变更后的状态; prev 变更前的状态
  //   console.log(state, prev);
  // });
  // props.setGlobalState(state); // 设置


}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';//zheju
  instance = null;
  router = null;
}