<template>
  <div class="main">
    <div class="header_fu">
      <div class="header">
        <span class="header_span" @click="btns">〈</span>
        <span class="header_span1">动态</span>
        <img src="../../../img/two 图标1.jpg" />
      </div>
    </div>

    <div class="middle" v-for="(item,index) in list" :key="item.id">
      <img class="middle_img" :src="img" alt />
      <p class="middle_p">{{cookies}}</p>
      <p class="dynamic_time">{{item.showTime | dateFormat}}</p>
      <p class="dynamic_p">{{JSON.parse(item.json).msg}}</p>
      <img class="dynamic_img" :src="item.pics[0].originUrl" alt />
      <ul class="dynamic_ul">
        <li>
          <img src="../../../images/ZW.png" alt />
          <p>转发</p>
        </li>
        <router-link :to="{name:'PL',query:{id:item.info.threadId,time:item.showTime,img:item.pics[0].originUrl,wz:JSON.parse(item.json).msg}}">
          
          <li>
            <img src="../../../images/PL.png" alt />
            <p>评论</p>
          </li>
        </router-link>
        <li class="app" @click="dzbtn(item.info.threadId)">
          <p v-if="list.length?'':'你还没有添加关注'" class="pp">你还没有添加关注</p>
          <img src="../../../images/DZ.png" alt />
          <p>赞</p>
        </li>
      </ul>
    </div>
    <div class="footer_fot">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from "@/components/footer/index.vue";
export default {
  name: "Four",
  components: {
    Footer
  },
  data() {
    return {
      list: [],
      img: this.$cookies.get("avatarUrl"),
      cookies: "",
      isLogined: false
    };
  },

  methods: {
    btns() {
      history.go(-1);
    },
    dzbtn(id) {
      this.axios
        .get(
          "http://localhost:3000/comment/like?type=6&cid=" +
            1419532712 +
            "&threadId=" +
            id +
            "&t=" +
            1
        )
        // console.log(id)
        .then(res => {
          console.log(res);
        });
    }
  },
  mounted() {
    this.cookies = this.$cookies.get("nickname");
    //  this.$cookies.get('nickname')
    let that = this;

    that.axios
      .get("http://localhost:3000/user/event?uid=" + that.$cookies.get("id"))
      .then(res => {
        // console.log(res.data.events[0].eventTime)
        console.log(res.data.events);
        that.list = res.data.events;
      });
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* .ul_big{
  margin-top:50px
} */
.main {
  height: 100%;
}
.header_fu {
  width: 100%;
  min-height: 3rem;
}
.header {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-around;
  background-color: #d33a31;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: space-around;
}
.header_span1 {
  line-height: 2.5;
  color: white;
  font-size: 17px;
}
.header img {
  width: 2rem;
  height: 2rem;
  margin-top: 0.4rem;
}
.header_span {
  line-height: 2.3;
  color: white;
  font-size: 20px;
}

.middle {
  width: 100%;
  height: 70%;
  border-bottom: 1px solid #cccccc;
}
.middle_img {
  width: 10%;
  border-radius: 50%;
  margin: 5%;
  float: left;
}
.middle_p {
  width: 70%;
  margin-top: 6%;
  color: royalblue;
  font-weight: 700;
  font-size: 14px;
}

.footer_fot {
  min-height: 48px;
}
.dynamic_time {
  font-size: 8px;
  color: #ccc;
}
.dynamic_p {
  margin-top: 1%;
  font-size: 16px;
}

.dynamic_img {
  margin-left: 20%;
  width: 30%;
  height: 55%;
  margin-top: 2%;
}
.dynamic_ul {
  width: 43%;
  display: flex;
  justify-content: space-between;
  margin-left: 20%;
  margin-top: 1%;
}
.dynamic_ul li p {
  float: left;
  font-size: 12px;
  margin-left: 3px;
}
.dynamic_ul li img {
  width: 1rem;
  height: 1rem;
  float: left;
  /* margin-bottom:10px */
}
</style>