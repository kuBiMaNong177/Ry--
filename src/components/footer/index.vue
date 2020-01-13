<template>
   <footer class="bot">
      <router-link tag="a" :to='{name:"one"}'>
        <span class="iconfont icon-gedan"></span>
        <em>发现音乐</em>
      </router-link>
      <router-link tag="a" :to='{name:"two"}'>
        <span class="iconfont icon-yinyue"></span>
        <em>我的音乐</em>
      </router-link>
      <router-link tag="a" :to='{name:"three"}'>
        <span class="iconfont icon-wode"></span>
        <em>朋友</em>
      </router-link>
      <router-link tag="a" :to='{name:"four"}'>
        <span class="iconfont icon-wode"></span>
        <em>账号</em>
      </router-link>
    </footer>
</template>

<script>
export default {
  name: 'Footer',

  methods: {
    // songSheet: function() {
    //   console.log(111)
    //   this.axios
    //     .get(
    //       'http://localhost:3000/user/playlist?uid=' + this.$cookies.get('id')
    //     )
    //     .then(res => {
    //       console.log(res)
    //     })
    // }
  }
}
</script>

<style scoped>
/* footer */
.footer_bot {
  height: 3rem;
  width: 100%;
}
.main .bot {
  border-top: 1px #ccc solid;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3rem;
  width: 100%;
  position: fixed;
  bottom: 0px;
  background-color: rgba(255, 255, 255, 1);
}
.main .bot a {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(170, 170, 170, 1);
}
.main .bot a.router-link-active{
   color: rgb(245, 9, 9);
}
.main .bot a span {
  font-size: 1.25rem;
}
.main .bot a em {
  font-size: 0.84rem;
}
</style>
