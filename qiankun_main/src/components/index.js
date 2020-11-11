/*
 * @Description: 需要注意组件的外层文件名名必须跟组件名一致，因为为了直观，这里引入时候用的是文件夹名 ；而且组件名称必须是index.vue
 * @Author: 黄越
 * @Date: 2020-04-24 14:10:18
 * @LastEditors: 黄越
 * @LastEditTime: 2020-04-24 14:46:03
 */
// import Vue from 'vue'
// const commonComponents = require.context('./', true, /index.vue$/);
// // 遍历出每个组件的路径
// commonComponents.keys().forEach(fileName => {
//     // 组件实例
//     const reqCom = commonComponents(fileName)
//     // 截取路径作为组件名
//     const reqComName = fileName.split('/')[1]
//     // 组件挂载
//     Vue.component(reqComName, reqCom.default || reqCom)
// })

// export default {
//     ...commonComponents
// };


import tableFilter from "./tableFilter";
import collapseBox from "./collapseBox";

const components = [tableFilter,collapseBox];

const install = function (Vue) {
  components.forEach(v => {
    Vue.component(v.name, v);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
    install,
    collapseBox,
    tableFilter
};