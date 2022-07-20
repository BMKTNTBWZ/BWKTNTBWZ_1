import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Layout from '../views/Layout.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Layout',
    redirect:"/product",
    component: Layout,
    meta:{
      requiresAuth: true
    },
    children:[
      {
        path:'/layout',
        name:"Product",
        component:()=>import("../views/Product"),
        meta:{
          requiresAuth: true
        },
      },
      {
        path:'/layout/params',
        name:"Params",
        component:()=>import("../views/Params"),
        meta:{
          requiresAuth: true
        },
      },
      {
        path:'/layout/content',
        name:"Content",
        component:()=>import("../views/Content"),
        meta:{
          requiresAuth: true
        },
      },
    ]
  },
  {
    path:'/user',
    name:"User",
    component:()=>import("../views/User"),
    meta:{
      requiresAuth: true
    },
  }
]

const router = new VueRouter({
  routes
})

export default router
