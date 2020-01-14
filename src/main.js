import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
import VueCookies from 'vue-cookies'
import '../public/css/reset.css'
=======
import '../public/css/reset.css'
import VueCookies from 'vue-cookies'
>>>>>>> 291ba52fc27408c06034e009ad32083546d1f80e

Vue.use(Vant)
Vue.use(VueCookies)
Vue.prototype.axios = axios
Vue.config.productionTip = false

<<<<<<< HEAD
window.addEventListener('popstate', function (e) {
  router.isBack = true
},false)
=======
//时间格式化过滤器
Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear() //年
  const m = (dt.getMonth() + 1 + '').padStart(2, '0') //月
  const d = (dt.getDate() + '').padStart(2, '0') //日

  const hh = (dt.getHours() + '').padStart(2, '0') //时
  const mm = (dt.getMinutes() + '').padStart(2, '0') //分
  const ss = (dt.getSeconds() + '').padStart(2, '0') //秒

  return `${y}年${m}月${d}日 ${hh}:${mm}`
})
>>>>>>> 291ba52fc27408c06034e009ad32083546d1f80e

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
