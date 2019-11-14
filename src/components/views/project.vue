<template>
  <div>
    <h3>项目成就</h3>
    <div class="transbox">
      <el-table :data="tableData" default-active="$route.path" light router stripe height="100%" border
        style="width: 100%">
        <el-table-column prop="name" label="项目名称" width="180">
        </el-table-column>
        <el-table-column prop="member" label="参与成员" width="180">
        </el-table-column>
        <el-table-column prop="data" label="开始日期" width="180">
        </el-table-column>
        <el-table-column prop="progress" label="项目进展">
        </el-table-column>
        <el-table-column align="right" width="100">
          <router-link to="/details">详情</router-link><!-- 用路由进行页面跳转 -->
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
        name: '项目1',
        member: '王小虎',
        data: '2016-05-03',
        progress: '90%'
      }, {
        name: '项目2',
        member: '王小虎',
        data: '2016-05-03',
        progress: '10%'
      }, {
        name: '项目3',
        member: '王小虎',
        data: '2016-05-03',
        progress: '20%'
      }, {
        name: '项目4',
        member: '王小虎',
        data: '2016-05-03',
        progress: '10%'
      }, {
        name: '项目5',
        member: '王小虎',
        data: '2016-05-03',
        progress: '50%'
      }, {
        name: '项目6',
        member: '王小虎',
        data: '2016-05-03',
        progress: '70%'
      }, {
        name: '项目7',
        member: '王小虎',
        data: '2016-05-03',
        progress: '100%'//定义数组
      }]
    }
  },
  props: {

  },
  methods: {
    // toDetails () {
    //   var that
    //   that = this
    //   that.$router.push('/details')
    // },

  },
}
</script>
<style>
body {
  background: url("../../assets/1.png");
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