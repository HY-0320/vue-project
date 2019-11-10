<template>
  <div id="activities">
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="name" label="名称" width="180"></el-table-column>

    <el-table-column prop="date" label="日期" width="180"></el-table-column>

    <el-table-column prop="crew" label="人员" width="180"></el-table-column>

    <el-table-column prop="address" label="地址"></el-table-column>

    <el-table-column></el-table-column>

    <el-table-column
      fixed="right"
      label="操作"
      width="100">
        <el-button type="text" size="small">
          <router-link to="./check">查看</router-link>
        </el-button>
        <el-button type="text" size="small">
          <router-link to="./edit">编辑</router-link>
        </el-button>
    </el-table-column>
    
  </el-table>
  </div>
</template>

<script>
export default {

  data() {
    return {
      tableData: [
        {
          name: '素拓活动',
          date: '2019-11-02',
          crew: '2019班同学',
          address: '学校'

        },
        {
          name: '素拓活动',
          date: '2019-11-02',
          crew: '2019班同学',
          address: '学校'

        }
      ]
    }
  }
}
</script>

<style>
#activities{
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