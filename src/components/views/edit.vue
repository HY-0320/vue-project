<template>
  <div id="myid">
    <div>
      <router-link to="/"><h1 style="color:white" >HOME</h1></router-link>
      <br />
    </div>
    <h1>{{gender}}</h1>
  </div>
</template>

<script>
import home from "./home.vue";
export default {
  
  data() {
    return {
      gender: "Can be used to edit some information about students!"
    };
  }
};
</script>


<style scoped>
#myid{
  background: url('../../assets/stuBackground.png');
  position: fixed;
  width: 100%;
  height: 100%;
}
</style>