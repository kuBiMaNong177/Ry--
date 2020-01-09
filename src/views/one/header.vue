<template>
  <header class="header">
    <div class="head-t">
      <i class="iconfont icon-huatong"></i>
    <input type="text" placeholder="搜索音乐、歌词、电台">
    <em class="iconfont icon-paihangbang"></em>
    </div>

    <div class="nav">
      <router-link :to="{name:'one'}" class="active">个性推荐</router-link>
      <router-link :to="{name:'Gedan'}">歌单</router-link>
      <router-link :to="{name:''}">个性推</router-link>
      <router-link :to="{name:''}">个性推荐</router-link>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>

.header{width: 100%;height:6.39rem;}
.header .head-t{display:flex;justify-content:space-between;width: 100%;height:3.56rem;border-bottom:1px solid #ccc;}
.header .head-t i{font-size:1.93rem;margin-left:0.49rem;margin-top:0.81rem;color: rgba(153, 153, 153, 1);}
.header .head-t input{border:0; width:18.6rem;height:2.43rem;color: rgba(80, 80, 80, 1);background-color: rgba(218, 218, 218, 1);
	border-radius: 1.21rem;	font-size: 0.97rem;	line-height: 150%;text-align: center;margin-top: 0.56rem;}
.header .head-t em{font-size:1.93rem;margin-right:0.49rem;margin-top:0.81rem; color: rgba(153, 153, 153, 1);}

.header .nav{display: flex;border-bottom:1px solid #ccc;width:100%;height:2.83rem;}
.header .nav a{flex:1;line-height:2.83rem;text-align: center;font-size:1rem;color: rgba(128, 128, 128, 1);}
.header .nav .active{color: #000;border-bottom:1px solid #000;}
</style>
