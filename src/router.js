import Vue from 'vue'
import Router from 'vue-router'
import activities from './components/activities.vue'
import add from './components/add.vue'
import edit from './components/edit.vue'
import check from './components/check.vue'

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
            path:'/add',
            name:'add',
            component:add
        },
        {
            path:'/edit',
            name:'edit',
            component:edit
        },
        {
            path:'/check',
            name:'check',
            component:check
        },
    ]
})

