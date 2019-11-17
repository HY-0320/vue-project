<template>
  <div>
    <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
      <el-form-item label="项目名称">
        <el-input :value="this.$store.state.tableData[0].name"></el-input>
      </el-form-item>
      <el-form-item label="参与成员">
        <el-input v-model="sizeForm.members"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="sizeForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="项目开始时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="sizeForm.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="sizeForm.type">
          <el-checkbox-button label="科技比赛" name="type"></el-checkbox-button>
          <el-checkbox-button label="发明专利" name="type"></el-checkbox-button>
          <el-checkbox-button label="论文专著" name="type"></el-checkbox-button>
        </el-checkbox-group>
      </el-form-item>
      <!-- <el-form-item label="特殊资源"> -->
      <!-- <el-radio-group v-model="sizeForm.resource" size="medium">
          <el-radio border label="线上品牌商赞助"></el-radio>
          <el-radio border label="线下场地免费"></el-radio>
        </el-radio-group> -->
      <!-- </el-form-item> -->
      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <div>
      <router-link to="/">返回→</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data () {
    return {
      sizeForm: {
        name: '',
        members: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    };
  },
  methods: {
    onSubmit () {
      console.log('submit!');
    }
  }
};
</script>
<style>
</style>