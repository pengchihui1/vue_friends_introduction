import Vue, { createApp } from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// 导入 Bootstrap 和 BootstrapVue CSS 文件（顺序很重要）
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist /bootstrap-vue.css'

// 使 BootstrapVue 在整个项目中可用
Vue.use(BootstrapVue) // 可选择安装 BootstrapVue 图标组件插件
Vue.use(IconsPlugin)

createApp(App).mount('#app')


