<template>
  <footer class="bot">
    <router-link class="aa" to="/">
      <span class="iconfont icon-gedan"></span>
      <em>发现音乐</em>
    </router-link>
    <router-link to="two">
      <span class="iconfont icon-yinyue"></span>
      <em>我的音乐</em>
    </router-link>
    <router-link to="three">
      <span class="iconfont icon-wode"></span>
      <em>朋友</em>
    </router-link>
    <router-link to="four">
      <span class="iconfont icon-wode"></span>
      <em>账号</em>
    </router-link>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
/* footer */
.main .bot {
  border-top: 1px #ccc solid;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3rem;
  width: 100%;
}
.main .bot a {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(170, 170, 170, 1);
}
.main .bot .aa {
  color: rgba(0, 0, 0, 1);
}
.main .bot a span {
  font-size: 1.25rem;
}
.main .bot a em {
  font-size: 0.84rem;
}
</style>
