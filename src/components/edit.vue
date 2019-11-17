<template>

<div id="check">
    <h1><router-link to="/">返回</router-link></h1>
    <h1>这是编辑界面</h1>
<div>
  名称<input type="text" :value="this.$store.state.tableData.name"><br>
  日期<input type="text" :value="this.$store.state.tableData.date"><br>
  人员<input type="text" :value="this.$store.state.tableData.crew"><br>
  地址<input type="text" :value="this.$store.state.tableData.address"><br>
  详情<textarea name="" id="" cols="30" rows="10"></textarea>

</div>
</div>
</template>


<script>
export default {

  data() {
    return {
      
    };
  },
  methods:{

  }
};
</script>

<style>
#edit{
  height: 100%;
  width: 100%;
  position: fixed;
  background: url("../assets/background.png");
  color: aliceblue;

}
*{
  margin: 0px;
  padding: 0px;
}
</style>