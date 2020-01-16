<template>
  <div class="comment">
    <Header class="top">
      <ul class="topContent">
        <li>
          <img @click="moveBack()" src="../../img/two 图标7.png" />
        </li>
        <li>
          <p>评论（）</p>
        </li>
        <li>
          <img src="../../img/two 图标12.png" />
        </li>
      </ul>
    </Header>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
    this.load()
  },
  methods: {
    load() {
      console.log(this.$route.query.ids)
    },
    moveBack() {
      history.go(-1)
    }
  }
}
</script>

<style scoped>
.top {
  width: 100%;
  height: 2.75rem;
}
.topContent {
  display: flex;
  justify-content: space-between;
  background: rgba(60, 60, 60, 0.6);
}
.topContent > li {
  width: 33.33%;
  height: 3.56rem;
}
.topContent > li:nth-child(1) > img {
  width: 0.6rem;
  height: 1rem;
  margin-top: 1.2rem;
  margin-left: 1rem;
}
.topContent > li:nth-child(2) > p {
  font-size: 0.88rem;
  color: rgba(80, 80, 80, 1);
  text-align: center;
  margin-top: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.topContent > li:nth-child(3) > img {
  width: 1.8rem;
  height: 1.8rem;
  margin-top: 1rem;
  margin-left: 6rem;
}
</style>
