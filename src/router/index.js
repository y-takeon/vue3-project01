import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Home')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
