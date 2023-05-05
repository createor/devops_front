// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import './styles/element-variables.scss'
import '@/styles/index.scss'
// import wsData from './utils'

// 打印当前环境
console.log(process.env.NODE_ENV)

// 开发环境启用测试数据
if (process.env.NODE_ENV === 'development') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.config.productionTip = false

// 创建ws连接，通过this.$ws调用
// Vue.prototype.$ws = wsData.getInstance()

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
