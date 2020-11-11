<template>
  <div id="app">
    <div id="nav">
      <router-link to="/qiankun_child1">Home</router-link> |
      <router-link to="/qiankun_child1/about">About</router-link> |
      <router-link to="/qiankun_child1/list">List</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body{
  border:2px solid red
}
</style>
