<template>
<div id="edit">
    <router-link to="/">返回</router-link>
    <h1>这是编辑界面</h1>
</div>
</template>

<script>
export default {

  data() {
    return {
      
    };
  },
 
};
</script>

<style>
#edit{
  height: 100%;
  width: 100%;
  position: absolute;
  background: url(../assets/background.png);
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  -webkit-font-smoothing: antialiased;

}
*{
  margin: 0px;
  padding: 0px;
}
</style>