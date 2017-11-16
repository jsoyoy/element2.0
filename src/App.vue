<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->

    <router-link to="/Element">Element2.5</router-link>
    <router-link to="/Newvue">VUE2.5</router-link>
    <el-row>
      <el-col :push="4" :span="16"><router-view></router-view></el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
