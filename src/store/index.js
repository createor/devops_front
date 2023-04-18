// vuex状态模块
import Vue from 'vue'
import Vuex from 'vuex'
import { userLogin, getMenu } from '@/api/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用于存放用户鉴权的token
    token: window.localStorage.getItem('token'),
    // 用于存放用户菜单信息
    userMenu: []
  },
  getters: {
    token: (state) => state.token,
    menu: (state) => state.userMenu
  },
  mutations: {
    SET_TOkEN (state, token) {
      state.token = token
    },
    SET_USER (state, userMenu) {
      state.userMenu = userMenu
    }
  },
  actions: {
    login (context, form) {
      // 获取表单中的用户名和密码
      const { name, passwd } = form
      return new Promise((resolve, reject) => {
        // 调用用户登陆接口
        userLogin({ username: name.trim(), password: passwd }).then((response) => {
          const { data } = response
          if (data.status === 0) {
            // 存储用户的token
            context.commit('SET_TOKEN', data.data.token)
            window.localStorage.setItem('token', data.data.token)
          }
          resolve(data)
        }).catch((error) => {
          reject(error)
        })
      })
    },
    menu (context) {
      return new Promise((resolve, reject) => {
        getMenu().then((response) => {
          const { data } = response
          if (data.status === 0) {
            context.commit('SET_USER', data.data)
          }
          resolve()
        }).catch((error) => {
          reject(error)
        })
      })
    }
  }
})
