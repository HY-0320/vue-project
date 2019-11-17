<template>
  <div id="activities">
    <div>
      <br>
      <h1 style="color:white">班级活动信息</h1>
      <br>
    </div>
  <el-table class="table"
  :data="this.$store.state.tableData" 
  border style="width: 100%"
  :row-style="getRowClass"
  :header-row-style="getRowClass"
  :header-cell-style="getRowClass"
  
  >
    <el-table-column prop="name" label="名称" width="180"></el-table-column>

    <el-table-column prop="date" label="日期" width="180"></el-table-column>

    <el-table-column prop="crew" label="人员" width="180"></el-table-column>

    <el-table-column prop="address" label="地址"></el-table-column>

    <el-table-column fixed="right" label="操作" width="100">

        <el-button type="text" size="small">
          <router-link to="./add">
          <span style="color:rgb(135, 206, 250)">添加</span>
          </router-link>
        </el-button>

        <el-button type="text" size="small">
          <router-link to="./edit">
          <span style="color:rgb(135, 206, 250)">编辑</span>
          </router-link>
        </el-button>

        <el-button type="text" size="small">
          <router-link to="./check">
          <span style="color:rgb(135, 206, 250)">查看</span>
          </router-link>
        </el-button>

    </el-table-column>
    
  </el-table>
  </div>
</template>

<script>
import add from './add.vue';
import edit from './edit.vue';
import check from './check.vue';

export default {

  data() {
    return {
      
    };
  },
  methods:{
    getRowClass({ row, column, rowIndex, columnIndex }) {  //背景优化
      return "background:#3f5c6d2c;color:#87CEFA;";
    },
  }
  
}
</script>

<style>
#activities{
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
.table {
  background-color: rgba(0, 0, 0, 0) !important;
}
</style>