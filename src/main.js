import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// 全局引入框架element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入icon图标库
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'
// 使用ElementUI组件
Vue.use(ElementUI)
Vue.config.productionTip = false
// 配置请求根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 将axios赋给vue的http原型
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
