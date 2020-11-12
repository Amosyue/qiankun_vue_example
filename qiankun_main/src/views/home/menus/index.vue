<template>
  <div class="menuList">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu index="2">
        <template slot="title">主项目</template>
        <el-menu-item index="/about">关于我们</el-menu-item>
        <el-menu-item index="/news">新闻</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">子项目1</template>
        <el-menu-item index="/qiankun_child1">子项目1__home页</el-menu-item>
        <el-menu-item index="/qiankun_child1/about">子项目1__关于我们</el-menu-item>
        <el-menu-item index="/qiankun_child1/list">子项目1__列表</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">子项目2</template>
        <el-menu-item index="/qiankun_child2">子项目2__home页</el-menu-item>
        <el-menu-item index="/qiankun_child2/about">子项目2__关于我们</el-menu-item>
        <el-menu-item index="/qiankun_child2/list">子项目2__列表</el-menu-item>
      </el-submenu>
      <el-menu-item index="4" style="text-align:right;float:right">当前用户：{{userName}}</el-menu-item>
    </el-menu>
    <!-- <div @click="changeName">修改当前用户名</div> -->
  </div>
</template>
<script>
  import {
    mapState
  } from 'vuex'
  export default {
    data() {
      return {
        activeIndex: '1',
        userName: ''
      };
    },
    mounted() {
      this.$nextTick(v => {
        this.$actions.onGlobalStateChange(state => {
          this.userName = state.data.userName
        }, true)
      })
    },
    computed: {
      ...mapState({
        "menuList": state => state.userInfo.menuList,
      })
    },
    methods: {
      changeName() {
        this.$actions.setGlobalState({data:{'userName':'youke'}})
      },
      goTo(item) {
        this.$router.push(item.path)
      },
      handleSelect(key, keyPath) {
        this.$router.push(key)
      }
    }
  }
</script>
