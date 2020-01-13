import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../public/css/reset.css";
import VueCookies from "vue-cookies";

Vue.use(VueCookies);

Vue.use(Vant);
Vue.prototype.axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
