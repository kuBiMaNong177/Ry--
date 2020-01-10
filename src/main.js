<<<<<<< HEAD
import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";
import axios from "axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../public/css/reset.css";
=======
import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'
import VueCookies from 'vue-cookies'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import '../public/css/reset.css'
<<<<<<< HEAD
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
=======
>>>>>>> 60e3f274d99352a91811be2e553957f6adb42e88
>>>>>>> 04903746a16ed1d2b530f8076e83de7cb109467d


<<<<<<< HEAD
Vue.config.productionTip = false;
=======
Vue.use(VueCookies)

Vue.use(Vant)

Vue.use(ElementUI);
Vue.prototype.axios=axios
Vue.config.productionTip = false
>>>>>>> 60e3f274d99352a91811be2e553957f6adb42e88

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
