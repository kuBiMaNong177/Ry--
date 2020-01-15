import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    counts: 0,
    count: 0,
    count_dynamic:0,
  },
  mutations: {
    add(state, playltoad) {
      let t = new Vue();
      // 关注·
      t.axios.get("http://localhost:3000/user/follows?uid=" + t.$cookies.get("id"))
        .then(res => {
          this.state.counts = res.data.follow.length
        });
        // 粉丝
      t.axios.get('http://localhost:3000/user/followeds?uid=' + t.$cookies.get("id"))
        .then(res => {
          console.log(res.data.followeds)
          this.state.count = res.data.followeds.length
        })
        // 动态
      t.axios
        .get("http://localhost:3000/user/event?uid=" + t.$cookies.get("id"))
        .then(res => {
          this.state.count_dynamic = res.data.events.length
        });

    },
  },
  actions: {
  },
  modules: {

  }
})
