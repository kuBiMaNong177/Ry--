<template>
  <div class="whole">
    <Header class="top">
      <ul class="topContent">
        <li>
          <img @click="moveBack()" src="../../img/two 图标7.png" />
        </li>
        <li>
          <p>
            晴天
            <em>周杰伦</em>
          </p>
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
  methods: {
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
.topContent > li:nth-child(1) > img {
  width: 0.8rem;
  height: 1.2rem;
  margin-top: 1.3rem;
  margin-left: 1rem;
}
</style>

