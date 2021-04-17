import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login' // 重定向
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Home.vue')
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由守卫导航
router.beforeEach((to, from, next) => {
  // to将要访问的路径
  // from代表从哪个路径跳转而来
  // next是一个函数,表示放行
  // next('/login')强制跳转的路径

  // 判断路由是否是登录路由是的话就放行
  if (to.path === '/login') {
    return next()
  } else {
    // 不是登录路由的话,就查看是否存在token
    // 获取token
    const tokenStr = window.sessionStorage.getItem('token')
    // 如果token不存在就强制跳转到login页面
    if (!tokenStr) {
      return next('./login')
    } else {
      // 如果token存在就放行
      next()
    }
  }
})

export default router
