import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import userInfo from './module/userInfo'


export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userInfo
  }
})


// Vue.use(Vuex)
// import Vue from 'vue'
// import Vuex from 'vuex'
// // import commonModule from './modules/commonModule.js'
// // import workTableModule from './modules/workTableModule.js'



// import home from './modules/home'
// import cmdb from './modules/cmdb'
// import dash from './modules/dash'
// import flow from './modules/flow'
// import system from './modules/system'
// import menu from './modules/menu'
// import cd from './modules/cd'
// import componentInfo from './modules/quickopsui_componentList'
// import quickopsui_process from './modules/quickopsui_process'

// export default new Vuex.Store({
//   modules: {
//     home,
//     cmdb,
//     dash,
//     flow,
//     system,
//     menu,
//     cd,
//     componentInfo,
//     quickopsui_process
//   }
// })
