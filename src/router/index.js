import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login.vue'
import Home from '../components/home.vue'
import Welcome from '../components/welcome.vue'
import Users from '../components/users.vue'

Vue.use(Router)

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
        { path: '/users', component: Users }
      ]
    }
  ]
})
export default router
