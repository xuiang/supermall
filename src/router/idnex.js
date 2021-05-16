import Vue from 'vue'
import Router from 'router'
const Home =()=>import( '../view/home.vue')
const Profile=()=>import('../view/profile.vue')
const shopCar=()=>import( '../view/shopcar.vue')
const Sort=()=>import('../view/sort.vue')
const originalPush = Router.prototype.replace//解决路由报错
Router.prototype.replace = function replace (location){
  return originalPush.call(this,location).catch(err=>err)
}
Router.prototype.push = function push (location){
  return originalPush.call(this,location).catch(err=>err)
}
Vue.use(Router)

const  routes = [
  {
    path:'',
    redirect:'/home',
  },
  {
    path:'/home',
    component:Home,
  },
  {
    path:'/profile',
    component:Profile,
  },
  {
    path:'/shopCar',
    component:shopCar,
  },
  {
    path:'/sort',
    component:Sort,
  },
]

export default new Router({
  routes,
  mode:'history',
})
