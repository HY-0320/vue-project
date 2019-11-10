import Vue from 'vue'
import Router from 'vue-router'
import activities from './components/activities.vue'
import check from './components/check.vue'
import edit from './components/edit.vue'


Vue.use(Router)
export default new Router({
    mode:'history',
    base:process.env.BASE_URL,
    routes:[
        {
            path:'/',
            name:'activities',
            component:activities
        },
        {
            path:'/check',
            name:'check',
            component:check
        },
        {
            path:'/edit',
            name:'edit',
            component:edit
        },
    ]
})

