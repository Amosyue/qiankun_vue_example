import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import List from '../views/List.vue'
Vue.use(VueRouter)

const baseUrl = "/qiankun_child1"
const routes = [
  {
    path: '/',
    name: 'Home',
    component:  () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    redirect:  baseUrl+'/',
  },
  {
    path: baseUrl+'/',
    name: 'Home',
    component:  () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path:baseUrl+'/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:baseUrl+'/list',
    name: 'List',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/List.vue')
  }
]

// router.onError((error) => {
//   const pattern = /Loading chunk (\d)+ failed/g;
//   const isChunkLoadFailed = error.message.match(pattern);
//   const targetPath = router.history.pending.fullPath;
//   if (isChunkLoadFailed) {
//     router.replace(targetPath);
//   }
// });

export default routes

// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')