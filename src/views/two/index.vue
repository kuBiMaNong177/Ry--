<template>
  <dl class="main">
    <!-- 头部 -->
    <Header class="top">
      <ul class="topContent">
        <li>
          <p>更多</p>
        </li>
        <li>
          <p>我的音乐</p>
        </li>
        <li>
          <img src="../../img/two 图标1.jpg" />
        </li>
      </ul>
    </Header>

    <!-- 内容 -->
    <dl class="content">
      <div class="nav">
        <ul class="sonNav">
          <li>
            <div>
              <img src="../../img/two 图标2.png" />
              <span>本地音乐</span>
            </div>

            <div>
              <span>248&nbsp;&nbsp;&nbsp;></span>
            </div>
          </li>
          <li>
            <div>
              <img src="../../img/two 图标3.png" />
              <span>最近播放</span>
            </div>

            <div>
              <span>248&nbsp;&nbsp;&nbsp;></span>
            </div>
          </li>
          <li>
            <div>
              <img src="../../img/two 图标4.png" />
              <span>我的电台</span>
            </div>

            <div>
              <span>248&nbsp;&nbsp;&nbsp;></span>
            </div>
          </li>
          <li>
            <div>
              <img src="../../img/two 图标5.png" />
              <span>我的收藏</span>
            </div>

            <div>
              <span>248&nbsp;&nbsp;&nbsp;></span>
            </div>
          </li>
        </ul>
      </div>
      <div class="Establish">
        <p>我创建得歌单（{{list.length}}）</p>
      </div>
      <router-link
        v-for="(item, id) in list"
        :key="id"
        :to="{ name: 'songSheet', query: { id: item.id } }"
      >
        <dl class="songsheet">
          <dl>
            <dt>
              <img :src="item.coverImgUrl" />
            </dt>
            <dd>
              <p id="xhyy">{{ item.name }}</p>
            </dd>
            <dd>
              <p id="yxz">{{ item.trackCount }}首，播放{{ item.playCount }}次</p>
            </dd>
          </dl>
        </dl>
      </router-link>
    </dl>
    <div class="height">
      <Footer></Footer>
    </div>
  </dl>
</template>
<script>
import Footer from '@/components/footer/index.vue'
import Vue from 'vue'
import bus from '@/assets/busEvent.js'

export default {
  name: 'Two',
  data() {
    return {
      list: []
    }
  },
  methods: {
    count: function() {
      this.axios
        .get(
          'http://localhost:3000/user/playlist?uid=' + this.$cookies.get('id')
        )
        .then(res => {
          console.log(res.data.playlist);

          this.list = res.data.playlist
        })
    }
  },
  created() {
    this.count()
  },
  components: {
    Footer
  }
}
</script>

<style scoped>
/* 头部区 */
.main .top {
  width: 100%;
  height: 3.56rem;
  top: 25.87rem;
  color: rgba(0, 0, 0, 1);
  background-color: #d33a31;
  font-size: 1.13rem;
  line-height: 150%;
  box-shadow: 0rem 0.08rem 0.08rem 0rem rgba(0, 0, 0, 0.5);
  text-align: center;
}
.topContent {
  display: flex;
  justify-content: space-between;
}
.topContent > li {
  width: 10rem;
  height: 100%;
}
.topContent > li:nth-child(1) > p {
  width: 4.85rem;
  height: 3.56rem;
  color: #ffffff;
  font-size: 0.97rem;
  line-height: 150%;
  text-align: center;
  line-height: 3.56rem;
}
.topContent > li:nth-child(2) > p {
  font-size: 1.13rem;
  line-height: 3.56rem;
  font-weight: 400;
  color: #ffffff;
}
.topContent > li:nth-child(3) > img {
  width: 1.94rem;
  height: 1.94rem;
  margin-top: 0.9rem;
  margin-left: 5rem;
}

/* 内容区 */
.content {
  flex: 1;
  overflow-y: auto;
}
.nav {
  width: 100%;
  height: 13.2rem;
}
.sonNav > li {
  width: 25.87rem;
  height: 3.23rem;
  border-top: solid 0.01rem #eeeff0;
}

.sonNav > li > div {
  width: 50%;
  height: 100%;
  float: left;
}
.sonNav > li > div {
  width: 50%;
  float: left;
  height: 100%;
}
.sonNav > li > div > img {
  width: 1.94rem;
  height: 1.94rem;
  float: left;
  margin-top: 0.6rem;
  margin-left: 0.8rem;
}
.sonNav > li > div:nth-child(1) > span {
  color: rgba(80, 80, 80, 1);
  float: left;
  line-height: 3.23rem;
  margin-left: 0.6rem;
}
.sonNav > li > div:nth-child(2) > span {
  color: rgba(153, 153, 153, 1);
  float: right;
  line-height: 3.32rem;
  margin-right: 1rem;
}

.Establish {
  width: 100%;
  height: 2.02rem;
  background: rgba(238, 238, 238, 1);
}
.Establish > p {
  font-size: 0.81rem;
  color: rgba(80, 80, 80, 1);
  line-height: 2.02rem;
  margin-left: 0.8rem;
}
.songsheet {
  width: 100%;
  height: 3.3rem;
}
.songsheet > dl {
  padding: 0.1rem 0 0.2rem 0;
}
.songsheet > dl > dt > img {
  width: 3.13rem;
  height: 3.13rem;
  float: left;
}
.songsheet > dl > dd > p {
  margin-left: 4rem;
}
#xhyy {
  font-size: 0.81rem;
  color: rgba(80, 80, 80, 1);
  line-height: 2rem;
}
#yxz {
  font-size: 0.63rem;
  color: rgba(128, 128, 128, 1);
}
.height > footer {
  min-height: 3rem;
}
</style>
