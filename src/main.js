import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'
// import index from './store/index'
import ElementUI from 'element-ui'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(VueRouter)
Vue.use(ElementUI)

Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) },
}).$mount('#app')
