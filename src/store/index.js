import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//创建vuex实例
const store = new Vuex.Store({
    state:{
        tableData: [
            {
              date: "2018-09-01",
              name: "王小虎",
              gender: "男",
              studentId: "5120181943",
              class: "物联1803班",
              phone: 200333,
              e_mail: 815673746,
              qq:999999999
            },
            {
              date: "2018-09-01",
              name: "王小虎",
              gender: "男",
              studentId: "5120181943",
              class: "物联1803班",
              phone: 200333,
              e_mail: 815673746,
              qq:999999999
            },
            {
              date: "2018-09-01",
              name: "王小虎",
              gender: "男",
              studentId: "5120181943",
              class: "物联1803班",
              phone: 200333,
              e_mail: 815673746,
              qq:999999999
            },
            {
              date: "2018-09-01",
              name: "王小虎",
              gender: "男",
              studentId: "5120181943",
              class: "物联1803班",
              phone: 200333,
              e_mail: 815673746,
              qq:999999999
            }
          ]
    }

})
 
export default store //导出store
