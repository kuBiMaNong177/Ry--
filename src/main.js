<<<<<<< HEAD

import Vue from 'vue'
import Vant from 'vant';
=======
import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../public/css/reset.css";
>>>>>>> 73c5bc0b10db109fa46c9f879f3e07050bbf486c
import 'vant/lib/index.css';
import VueCookies from 'vue-cookies'
<<<<<<< HEAD
import App from './App.vue'
import router from './router'
import store from './store'
import '../public/css/reset.css'

Vue.use(Vant);


Vue.use(VueCookies)

=======
Vue.use(Vant);
Vue.use(VueCookies)
>>>>>>> 73c5bc0b10db109fa46c9f879f3e07050bbf486c
Vue.prototype.axios=axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
