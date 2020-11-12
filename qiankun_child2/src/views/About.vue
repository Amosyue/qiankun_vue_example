<template>
  <div class="about">
    about2about2about2
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