import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            component: () => import('./views/default')
        },
        {
            path:'/player/:id',
            component: () => import('./views/player/_id')
        },
    ]
})