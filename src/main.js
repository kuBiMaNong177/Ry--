import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'
import '../public/css/reset.css'

Vue.use(Vant)

Vue.use(VueCookies)

Vue.prototype.axios = axios
Vue.config.productionTip = false

window.addEventListener('popstate', function (e) {
  router.isBack = true
},false)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
