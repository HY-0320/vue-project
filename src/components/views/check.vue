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
      gender: "she is a girl!"
    };
  }
};
</script>


<style scoped>
#myid{
  background: url('../../assets/stuBackground.png');
  position: absolute;
  width: 100%;
  height: 100%;
}

</style>