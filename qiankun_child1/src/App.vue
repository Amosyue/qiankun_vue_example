<template>
  <div id="app">
    <div id="nav">
      <!-- 路由跳转，使用通用方法 -->
      <el-row>
        <el-link @click="goRouter('/qiankun_child1')">Home1</el-link> |
        <el-link @click="goRouter('/qiankun_child1/about')">About1</el-link> |
        <el-link @click="goRouter('/qiankun_child1/list')">List1</el-link>
      </el-row>
      <el-row>
        <el-link @click="goRouter('/about')">About</el-link> |
        <el-link @click="goRouter('/news')">news</el-link>
      </el-row>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name:'',
  data() {
    return {
      
    }
  },
  methods: {
    goRouter(path){
      this.$mainUtils.routerGo(path)
    }
  },
}
</script>
<style lang="scss" scoped>
#app{
  padding: 12px;
  #nav{
    padding:12px;
    border:1px solid #eee;
    border-radius: 3px;
    margin-bottom: 16px;
  }
}
</style>
