<template>
  <div class="main">
    <div class="header_fu">
      <div class="header">
        <span class="header_span" @click="btns">〈</span>
        <span class="header_span1">账号</span>
        <img src="../../../img/two 图标一.jpg" />
      </div>
    </div>
    <div>
      <ul>
        <li class="li_big" v-for="(item,index) in list" :key="item.id">
          <img :src="item.avatarUrl" />
          <span class="li_span">{{item.nickname}}</span>
        </li>
      </ul>
    </div>
    <Footer></Footer>
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
      list: []
    };
  },
  methods: {
    btns() {
      history.go(-1);
    }
  },
  mounted() {
    this.axios
      .get("http://localhost:3000/user/follows?uid=" + this.$cookies.get("id"))
      .then(res => {
        console.log(res.data.follow);
        this.list = res.data.follow;
      });
  }
};

// function load(){
//     this.axios.get('http://localhost:3000/user/follows?uid='+this.$cookies.get('id'))
// .then(res=>{
//     console.log(res.data.follow)
//     this.list=res.data.follow
// },
// load()
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.main {
  height: 61.1rem;
}
.header_fu {
  width: 100%;
  height: 3rem;
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

.li_big {
  background: #cccccc;
  width: 100%;
  height: 6rem;
}
.li_big img {
  width:21%;
  float:left;
  margin-left:5%;
  margin-top:1.3%;
  border-radius:50%
}
.li_span{
    font-size:18px;
    margin-left:5%;
    line-height:3
}
</style>




