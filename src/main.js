import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BImg, BNavbar } from 'bootstrap-vue'


import 'bootstrap' //import Bootstrap’s JavaScript
import 'bootstrap/dist/css/bootstrap.min.css' // import Bootstrap CSS Styles
// import 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.component('b-img', BImg)
Vue.component('b-navbar', BNavbar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
