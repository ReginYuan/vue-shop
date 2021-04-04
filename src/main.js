import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// 全局引入框架element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 使用ElementUI组件
Vue.use(ElementUI)
Vue.config.productionTip = false
// 将axios赋给vue的http原型
Vue.prototype.$http = axios
axios({
  url: 'http://127.0.0.1:3333'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
