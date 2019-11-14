<template>
  <div>
    <h3>获奖情况</h3>
    <div class="transbox">
      <el-table :data="tableData" default-active="$route.path" light router stripe height="100%" border
        style="width: 100%">
        <el-table-column prop="name" label="比赛名称" width="180">
        </el-table-column>
        <el-table-column prop="member" label="获奖成员" width="180">
        </el-table-column>
        <el-table-column prop="data" label="获奖日期" width="180">
        </el-table-column>
        <el-table-column prop="rank" label="获奖等级">
        </el-table-column>
        <el-table-column align="right" width="100">
          <!-- <el-button size="mini" @click="toDetails()">详情</el-button> -->
          <router-link to="/awardsDetails">详情</router-link>
          <!--用路由进行页面跳转-->
          <router-view />
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'project',
  data () {
    return {
      tableData: [{
        name: '奖项1',
        member: '王小虎',
        data: '2016-05-03',
        rank: '国家级一等奖'
      }, {
        name: '奖项2',
        member: '王小虎',
        data: '2016-05-03',
        rank: '省级一等奖'
      }, {
        name: '奖项3',
        member: '王小虎',
        data: '2016-05-03',
        rank: '省级二等奖'
      }, {
        name: '奖项4',
        member: '王小虎',
        data: '2016-05-03',
        rank: '国家级一等奖'
      }, {
        name: '奖项5',
        member: '王小虎',
        data: '2016-05-03',
        rank: '国家级一等奖'
      }, {
        name: '奖项6',
        member: '王小虎',
        data: '2016-05-03',
        rank: '国家级一等奖'
      }, {
        name: '奖项7',
        member: '王小虎',
        data: '2016-05-03',
        rank: '国家级一等奖'//定义数组
      }]
    }
  },
  prop: {
    tableData: Array,
    name: String,
    member: String,
    data: Number,
    rank: String
  },
  methods: {
    toDetails () {
      this.$router.push({ path: 'awardsDetails', quary: { name: this.name } })
    },

  },
}
</script>
<style>
body {
  background: url("../assets/1.png");
}
h3 {
  right: 50%;
  color: rgb(237, 243, 245);
}
.transbox {
  background-color: #ffffff;
  opacity: 0.6;
  filter: alpha(opacity=60);
}
</style>