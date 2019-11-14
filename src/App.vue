<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import login from './components/login/login'
import register from './components/login/register'
export default {
  name: 'app',
  components: {

    login,
    register
  }
}
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
