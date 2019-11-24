<template>

<div id="check">
    <h1><router-link to="/">返回</router-link></h1>
    <h1>这是编辑界面</h1>
<div class="table2">
  名称:<input type="text" :value="this.$store.state.tableData.name" class="head"><br><br>
  日期:<input type="text" :value="this.$store.state.tableData.date" class="head"><br><br>
  人员:<input type="text" :value="this.$store.state.tableData.crew" class="head"><br><br>
  地址:<input type="text" :value="this.$store.state.tableData.address" class="head"><br><br>
  详情:<textarea name="" id="" cols="30" rows="10" class="head"></textarea>

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
.table2{
  position:fixed;
  top: 25%;
  right: 45%;
  
}
.head{
  width: 200px;
  font-size: 16px;
}
</style>