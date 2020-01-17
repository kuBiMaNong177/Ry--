<template>
  <div class="main">
    <header class="top">
      <ul>
        <li>
          <router-link to="tjgz">
            <img src="../../img/tb301.png" />
          </router-link>
        </li>
        <li>
          <span>
            <router-link to="dynamic">动态</router-link>
          </span>
          <span>
            <router-link to="near">附近</router-link>
          </span>
        </li>
        <li>
          <router-link to="play">
            <img src="../../img/tb302.png" />
          </router-link>
        </li>
      </ul>
    </header>
    <div class="router-view">
      <router-view></router-view>
    </div>
    <div class="lala">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/footer/index.vue'
import Header from '@/components/header/index.vue'
export default {
  name: 'Three',

  components: {
    Footer,
    Header
  }
}
</script>

<style scoped>
.lala {
  min-height: 3rem;
}
.router-view {
  flex: 1;
  overflow-y: auto;
}

.main .top {
  height: 2.75rem;
  width: 100%;
  border-bottom: 1px solid #ccc;
  background-color: red;
}

.main .top > ul > li > img {
  display: inline;
}

.main .top > ul > li:nth-child(1) > a > img {
  width: 31px;
  height: 31px;
  color: rgba(153, 153, 153, 1);
}

.main .top > ul > li:nth-child(3) > a > img {
  width: 31px;
  height: 31px;
  color: rgba(153, 153, 153, 1);
}

.main .top > ul {
  display: flex;
  justify-content: space-between;
  padding-top: 7px;
  align-items: center;
}

.main .top > ul > li > span {
  border: white solid 1px;
  padding: 2px 10px;
  background: white;
  border-radius: 0.825rem;
}
</style>
