import Vue from 'vue'
import Router from 'vue-router'
import awards from './views/awards.vue'
import project from './views/project.vue'
import details from './views/details.vue'
import awardsDetails from './views/awardsDetails.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/awards',
      name: 'awards',
      component: awards
    },
    {
      path: '/',
      name: 'project',
      component: project
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/awardsDetails',
      name: 'awardsDetails',
      component: awardsDetails
    }
  ]
})
