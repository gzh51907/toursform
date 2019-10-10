import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from "./router"
//引入UI框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//引入axios
import axios from 'axios'
Vue.prototype.$axios = axios
//引入vuex
import store from './store'


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
