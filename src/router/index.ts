import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Detail from '../pages/detail/detail.vue'
import TablePage from '../pages/table/table.vue'
import Layout from '../layout/layout.vue'

import { userInfo } from '../mock/userTypes'

declare module 'vue-router' {
    interface RouteMeta {
      // 是可选的
      auth?: Array<Number>
    }
  }

const routes: Array<RouteRecordRaw> = [
    {
        path:'/',
        name:'Layout',
        component:Layout,
        meta:{
            auth:[2]
        },
        children:[
            {
                path:'/',
                redirect:'/table'
            },
            {
                path:'/table',
                component:TablePage,
                name:'talbe',
                meta:{
                    auth:[2],
                    showName:'商品列表'
                },
            },
            {
                path:'/table/detail',
                component:Detail,
                name:'detail',
                meta:{
                    auth:[2],
                },
            },

        ]
    },
    {
        path:'/login',
        name:'login',
        component: () => import('../pages/login/login.vue')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const { meta } = to

    if(!meta || !meta.auth) return next()

    const userStr = localStorage.getItem('userInfo')

    if(userStr){
        const user:userInfo = JSON.parse(userStr)
        const { role } = user
        const { auth } = meta

        if(auth.indexOf(role) !== -1){
             next()
        }else{
            next({ name: 'login' })
        }
        
    }else{
        next({ name: 'login' })
    }
    
})

export default router