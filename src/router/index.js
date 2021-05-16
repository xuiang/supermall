import { createRouter, createWebHashHistory } from 'vue-router'
const Home = () => import('../views/home.vue')
const Profile = () => import('../views/profile.vue')
const shopCar = () => import('../views/shopcar.vue')
const Sort = () => import('../views/sort.vue')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/shopCar',
    component: shopCar
  },
  {
    path: '/sort',
    component: Sort
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
