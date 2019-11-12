<template>
  <div>
    <router-link to="/awards">获奖</router-link><!-- 用路由进行页面跳转 -->
    <router-view />
  </div>
</template>

<script>
import project from './views/project.vue'
// import details from './components/details.vue'
// import awardsDetails from './components/awardsDetails.vue'

export default {
  name: 'app',
  components: {
    project,
    // awardsDetails,
    // details

  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
