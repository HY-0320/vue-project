import Vue from 'vue'
import VueRouter from 'vue-router'
import introduction from './components/lll/introduction.vue'
import home from './components/lll/home.vue'


Vue.use(VueRouter)

export default new VueRouter({

  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/introduction',
      name: 'introduction',

      component: introduction
    }
  ]
})
