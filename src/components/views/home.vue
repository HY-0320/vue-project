<template>
  <div id="myid">
    <div>
      <router-link to="/">
        <h1 style="color:white">HOME</h1>
      </router-link>
      <br />
    </div>

    <el-table
      class="mytable"
      :data="this.$store.state.tableData"
      border
      style="width: 100%"
      :row-style="getRowClass"
      :header-row-style="getRowClass"
      :header-cell-style="getRowClass"
    >
      <el-table-column class="tbone" fixed prop="date" label="日期" width="150"></el-table-column>
      <el-table-column fixed prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="gender" label="性别" width="120"></el-table-column>
      <el-table-column prop="studentId" label="学号" width="120"></el-table-column>
      <el-table-column prop="class" label="专业班级" width="120"></el-table-column>
      <el-table-column prop="phone" label="手机号码" width="200"></el-table-column>
      <el-table-column prop="e_mail" label="e_mail" width="120"></el-table-column>
      <el-table-column prop="qq" label="QQ" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <el-button type="text" size="small">
          <router-link to="./check">
            <h4 style="color:orange">查看</h4>
          </router-link>
        </el-button>
        <el-button type="text" size="big">
          <router-link to="./edit">
            <h4 style="color:orange">编辑</h4>
          </router-link>
        </el-button>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import check from "./check.vue";
import edit from "./edit.vue";


export default {
  data() {
    return {

    };
  },
  methods: {
    getRowClass({ row, column, rowIndex, columnIndex }) {
      return "background:#3f5c6d2c;color:#87CEFA;";
    },
  }
};
</script>

<style>
#myid {
  color: aliceblue;
  position: fixed;
  width: 100%;
  height: 100%;
  background: url("../../assets/stuBackground.png");
}
/* .tebale-card {
  background-color: #3f5c6d2c;
} */

.mytable {
  background-color: rgba(0, 0, 0, 0) !important;
}
</style>
