<!--
 * @Description: 
 * @Author: 黄越
 * @Date: 2020-08-05 13:52:31
 * @LastEditors: 黄越
--> 
<template>
    <div class="collapseBox">
      <div class="title" :style="{'height':`${height}px`,'line-height':`${height}px`}">
        <div class="title_text textover">{{title}}</div>
        <i class="hander" :class="[status?'el-icon-arrow-down':'el-icon-arrow-up']" @click="status=!status"></i>
      </div>
      <div class="content" v-show="status">
        <slot name="content"></slot>
      </div>
    </div>
</template>
<script>
export default {
  name:'collapseBox',
  props:{
    isOpen:{
      type:Boolean,
      default:true
    },
    title:{
      type:String,
      default:""
    },
    height:{
      type:String,
      default:""
    }
  },
  data(){
    return {
      status:1//0是关闭，1打开
    }
  },
  mounted(){
    if(!this.isOpen){
      this.status = false
    }
  }
}
</script>
<style lang="scss" scoped>
  .collapseBox{
    border-radius: 4px;
    border:1px solid #e5e5e5;
    .title{
      height:40px;
      line-height: 40px;
      background:#ddd;
      color: #333;
      padding:0 12px;
      position: relative;
      .title_text{
        width: 80%;
        float: left;
      }
      .hander{
        padding:0 14px;
        float: right;
        cursor: pointer;
      }
    }
    .content{
      padding:0 12px;
    }
  }
</style>