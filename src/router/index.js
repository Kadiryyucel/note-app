import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path:'/login',
    name:'login',
    component:()=>import('../views/Login.vue')
  },
  {
    path:'/categories',
    name:'categories',
    component:()=>import('../views/Category.vue')
  },{
    path:'/categories/new',
    name:'new-category',
    component:()=>import('../views/New-Category.vue')
  },
  {
    path:'/categories/:id',
    name:'edit-category',
    component:()=>import('../views/Edit-Category.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
