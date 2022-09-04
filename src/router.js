import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Software from './views/Software.vue'
import Teamwork from './views/Teamwork.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/software',
      name: 'software-list',
      component: Software,
    },
    {
      path: '/teamwork',
      name: 'teamwork-list',
      component: Teamwork,
    }
  ]
})
