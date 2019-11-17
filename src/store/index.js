import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
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
})
export default store //导出store