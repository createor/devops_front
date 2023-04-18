// 路由模块
import Vue from 'vue'
import Router from 'vue-router'
// import Deployment from '@/components/Deployment'

Vue.use(Router)

const router = new Router({
  // 路由模式,默认hash模式
  // mode: 'history',
  // base: '/',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/Login')
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/Home'),
      // 子组件
      children: [
        {
          // 子组件的path开头不需要加斜杠
          path: 'task',
          name: 'Task',
          component: () => import('@/components/Task')
        },
        {
          path: '404',
          name: 'Page404',
          component: () => import('@/components/404')
        },
        {
          path: 'alarm',
          name: 'Alarm',
          component: () => import('@/components/alarm/index')
        },
        {
          path: 'user',
          name: 'User',
          component: () => import('@/components/User')
        },
        {
          path: 'info',
          name: 'Info',
          component: () => import('@/components/Info')
        },
        {
          path: 'host',
          name: 'Host',
          component: () => import('@/components/host/index'),
          children: [
            {
              path: 'detail',
              name: 'Detail',
              component: () => import('@/components/host/Detail')
            },
            {
              path: 'connect',
              name: 'Connect',
              component: () => import('@/components/host/Connect')
            }
          ]
        }
      ]
    }
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  let token = window.localStorage.getItem('token')
  // 如果要跳转的页面需要鉴权
  if (to.meta.requiresAuth) {
    if (token) {
      // 放行
      next()
    } else {
      // 否则返回登录页
      next({
        path: '/login'
      })
    }
  } else {
    // 放行
    next()
  }
})

export default router
