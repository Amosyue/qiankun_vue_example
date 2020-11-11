<template>
  <div class="about">
    <h1>我是qiankun_child1页面---成绩总和：{{code}}</h1>
    <div class="btn" @click="addCode">计算成功总和</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      code:0
    }
  },
  mounted() {
    // debugger
    // this.addCode()
  },
  methods: {
    addCode(){
      this.code = this.$tools.add(80,90)
      window.name="huangyue"
    }
  },
}
</script>
<style lang="scss" scoped>
  .about{
    .btn{
      border:1px solid #ddd;
      padding:5px 10px;
      border-radius: 3px;
    }
  }
</style>