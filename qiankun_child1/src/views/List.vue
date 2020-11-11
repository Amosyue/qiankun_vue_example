<template>
  <div class="list">
    <h1 class="red">list列表--{{name}}</h1>
    <!-- <el-button type="success" size="small"  @click="changeUserName">改变username</el-button> -->
    <span @click="changeUserName">改变username</span> | 
    <span @click="changeName">改变当前用户名</span>
    <!-- <tableFilter :ownerName.sync="ownerName"></tableFilter>
    <mymenu></mymenu> -->
  </div>
</template>
<script>
import {
  mapState
} from 'vuex'
export default {
  components:{
    // tableFilter
  },
  
  data(){
    return {
      ownerName:'王兰兰',
      name:''
    }
  },
  computed:{
    myname:function(){
      return this.$store.state.userInfo.userName
    }
  },
  mounted(){
    
  },
  methods:{
    changeUserName(){
      this.$store.commit('SET_USERNAME','wanglanlan'+Math.random())
    },
    changeName(){
      this.name = window.name
      this.$setGlobalState({data:{'userName':'youke2'}});
    }
  }
}
</script>

<style lang="scss">
  
</style>