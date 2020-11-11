<template>
  <div id="app">
    <menuList> </menuList>
    <router-view />
    <!-- <template v-if="!isChildApp">
      <router-view />
    </template> -->
   
    <div id="childContainer"></div>
    <!-- <template v-show="isChildApp">
      2222---{{isChildApp}}
      <div id="childContainer"></div>
    </template> -->
  </div>
</template>
<script>
  import menuList from './views/home/menus'
  // import {
  //   routerGo
  // } from "./utils/utils.js"; // 引入跨应用路由跳转
  export default {
    name: '',
    data() {
      return {
        userName:''
      }
    },
    mounted() {

    },
    computed: {
      // isChildApp() {
      //   if (this.$route.path.match('qiankun_')) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // }
    },
    components: {
      menuList
    },
    
    methods: {
     
    }
  }
</script>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
  }

  body,
  html {
    height: 100%;
    width: 100%;
  }

  #app {
    height: 100%;
    width: 100%;

  }
</style>
