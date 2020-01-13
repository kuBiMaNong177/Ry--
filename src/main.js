
import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'
import VueCookies from 'vue-cookies'
import App from './App.vue'
import router from './router'
import store from './store'
import '../public/css/reset.css'

Vue.use(Vant);

Vue.use(VueCookies)

Vue.use(Vant)


Vue.prototype.axios=axios
Vue.config.productionTip = false


//时间戳过滤  显示年  月  日  时 分 秒
Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal)

  // const y = dt.getFullYear()  //年
  const m = (dt.getMonth() + 1 + '').padStart(2,)  //月
  const d = (dt.getDate() + '').padStart(2, '0')   //日

  const hh = (dt.getHours() + '').padStart(2, '0')  //时
  const mm = (dt.getMinutes() + '').padStart(2, '0') //分
  // const ss = (dt.getSeconds() + '').padStart(2, '0') //秒

  // return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
  return `${m}月${d}日 ${hh}:${mm}`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
