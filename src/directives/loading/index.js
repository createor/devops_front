import { WindowsBalloon } from 'node-notifier'
import Vue from 'vue'
import loading from './loading'

const install = function(Vue) {
    Vue.directive('loding', loading)
}

if (window.Vue) {
    window.loading = loading
    Vue.use(install)
}

loading.install = install
export default loading