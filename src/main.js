import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
// 导入全局样式表
import './assets/css/global.css'
Vue.config.productionTip = false
// 将axios挂载到全局
Vue.prototype.$http = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
