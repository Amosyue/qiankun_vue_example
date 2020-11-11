<template>
  <div class="home">
   qiankun_child1 homehomehomehomehomehomehomehome-----{{curData}}
   <div>{{data1}}</div>
    <div>{{data2}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return {
      curData:window.a,
      data1:'',
      data2:''
    }
  },
  mounted(){
    // this.data1 = this.add1(this.curData)
    // this.data2 = this.add2(this.curData)
  }
}
</script>
