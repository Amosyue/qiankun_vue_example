<template>
  <div class="homePage">
    我是home页
    <!-- <div class="top">{{isChildApp}}---{{userName}}</div>
    <menuList> </menuList>
    <template v-if="!isChildApp">
      <router-view />
    </template>
    <template v-show="isChildApp">
      2222---{{isChildApp}}
      <div id="appVueHistory"></div>
    </template> -->
  </div>
</template>
<script>
  import menuList from './menus'
  import {
    mapState
  } from 'vuex'
  import {
    registerMicroApps, // 注册子应用方法
    setDefaultMountApp, // 设默认启用的子应用
    runAfterFirstMounted, // 有个子应用加载完毕回调
    start, // 启动qiankun
    addGlobalUncaughtErrorHandler, // 添加全局未捕获异常处理器
    // initGlobalState, // 官方应用间通信
  } from "qiankun";

  export default {
    name: 'home',
    data() {
      return {

      }
    },
    mounted() {
      //  this.getOptions({
      //       inputValue:'',
      //       currentPage:1
      //     })
    },
    computed: {
      ...mapState({
        "userName": state => state.userInfo.userName,
      }),
      // isChildApp() {
      //   if (this.$route.path.match('qiankun_')) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // }
    },
    components: {
      menuList,
    },
    methods: {
      changeUserName() {
        this.$store.commit('SET_USERNAME', 'huangyue' + Math.random())
      },
      // initconfigArrs(value,pageData,widget)
      getOptions(query) {
        this.$_http('post', '/cmdb/dataSourceApi/previewPageById/3b82363cdb8c47579550b3a908dbc686', {
          param: [{
            key: "cit_maintenance_show_name_value",
            operation: "lk",
            value: query ? query.inputValue : ''
          }],
          current: query.currentPage,
          size: 3
        }).then(res => {
          this.selectOptions = res.body.options
          this.selectData = {
            options: res.body.options,
            total: res.body.total
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .homePage {
    .top {
      line-height: 50px;
      height: 50px;
      width: 100%;
      background: #24292e;
      color: #fff;
      text-align: right;
      padding-right: 60px;
      box-sizing: border-box;
    }

  }
</style>