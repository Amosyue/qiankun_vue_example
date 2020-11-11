<template>
  <div class="home">
    这个栏目测试主项目通用下发的方法（加法和减法）和 主项目下发的通用组件
    <el-row :gutter="20" style="margin:10px 0 20px">
      <el-col :span="24" style="margin-bottom:6px">
        <el-button type="primary" @click="add(10,5)">点击+</el-button>10+5等于：{{num1}}
      </el-col>
      <el-col :span="24">
        <el-button type="primary" @click="sub(10,5)">点击-</el-button>10-5等于：{{num2}}
      </el-col>
    </el-row>

    下边是主项目下发的折叠面板组件
    <collapseBox title="开关必须" height="30">
      <template v-slot:content>
        <div style="padding:20px">
          底部信息
        </div>
      </template>
    </collapseBox>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        num1: null,
        num2: null
      }
    },
    mounted() {

    },
    methods: {
      add(a, b) {
        this.num1 = this.$mainUtils.add(a, b)
      },
      sub(a, b) {
        this.num2 = this.$mainUtils.sub(a, b)
      },
    }
  }
</script>