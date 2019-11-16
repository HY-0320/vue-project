<template>
  <div id="myid">
    <div>
      <router-link to="/"><h1 style="color:white" >HOME</h1></router-link>
      <br />
    </div>
    <div id="myTable">
        <input type="button" value="姓名:" class="button">
        <br>
        <input type="text"  :value="this.$store.state.tableData[0].name"  class="text"/>
        <br>
        <br>
        <input type="button" value="班级:" class="button">
        <br>
        <input type="text" :value="this.$store.state.tableData[0].class" class="text" />
        <br>
        <br>
        <input type="button" value="学号:" class="button">
        <br>
        <input type="text" :value="this.$store.state.tableData[0].studentId" class="text">
        <br>
        <br>
        <input type="button" value="联系电话:" class="button">
        <br>
        <input type="text" :value="this.$store.state.tableData[0].phone" class="text" >
        <br>
        <br>
        <input type="button" value="个人邮箱:" class="button">
        <br>
        <input type="text" :value="this.$store.state.tableData[0].e_mail" class="text">
        <br>
        <br>
        <input type="button" value="QQ:" class="button">
        <br>
        <input type="text" :value="this.$store.state.tableData[0].qq" class="text">
    </div>

  </div>
</template>

<script>
import home from "./home.vue";
export default {
  
  data() {
    return {

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
#myTable{
  position:fixed;
	top:120px;
	right:700px;
}
.button{
  width: 100px;
  font-size: 16px;
  background-color:gold;
}
.text{
  width: 200px;
  font-size: 21px;
  background-color:lightcoral;
}
</style>