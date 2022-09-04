import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vue-fullpage.js'

import 'bootstrap' //import Bootstrap’s JavaScript
import { BImg, BNavbar } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css' // import Bootstrap CSS Styles
// 全屏滚动 vue-fullpage.js
Vue.config.productionTip =
  false
Vue.component('b-img', BImg)
Vue.component('b-navbar', BNavbar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
