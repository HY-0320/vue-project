import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.config.productionTip = false

new Vue({
  router,
  ElementUI,
  store,
  render: function (h) { return h(App) },
}).$mount('#app')
