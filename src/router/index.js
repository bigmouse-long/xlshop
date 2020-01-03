import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login.vue'
import Home from '../components/home.vue'
import Welcome from '../components/welcome.vue'
import Users from '../components/users.vue'
import Goods from '../components/goods.vue'
import Best from '../components/best.vue'
import Shop from '../components/shop.vue'

Vue.use(Router)
// 解决路由报错问题
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

const router = new Router({
  routes: [
    // 重定向到登录页面
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome, redirect: '/users' },
        // 用户列表组件
        { path: '/users', component: Users },
        { path: '/goods', component: Goods },
        { path: '/best', component: Best },
        { path: '/shop', component: Shop }
      ]
    }
  ]
})
export default router
