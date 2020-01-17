<template>
  <div class="main">
    <div class="content">
      <div class="header_fu">
        <div class="header">
          <span></span>
          <span>账号</span>
          <img src="../../img/two 图标1.jpg" />
        </div>
      </div>
      <!-- v-if="this.$cookies.get('token')" -->
      <div class="ppp_pp"  v-if="!this.$cookies.get('token')">
        <p class="ppp1">登陆网易云音乐</p>
        <p class="ppp2">手机电脑多端同步，尽享海量高品质音乐</p>
        <button class="pppbtn" @click="bttnn">立即登录</button>
      </div>
      <div  v-if="this.$cookies.get('token')"  class="wrapper_276">
        <div class="box_border">
          <img :src="img" alt="">
        </div>
        <div class="all">
          <div class="text">{{this.$cookies.get("nickname")}}</div>
          <div class="grade">Lv 3</div>
        </div>
        <button class="btn">签到</button>
        <!-- 动态  关注  粉丝  我的资料组件 -->
        <fans class="fans"></fans>
      </div>
      <div class="beij">
        <van-index-anchor class="anchor_title_one"></van-index-anchor>
      <div class="img_1">
        <img src="../../images/3.svg" alt />
        <span>我的消息</span>
        <em>〉</em>
      </div>

      <van-index-anchor class="anchor_title_two"></van-index-anchor>
      <div class="img_1">
        <img src="../../images/4.png" alt />
        <span>会员中心</span>
        <em>〉</em>
      </div>
      <div class="img_1">
        <img src="../../images/5.png" alt />
        <span>商城</span>
        <em>〉</em>
      </div>
      <div class="img_1">
        <img src="../../images/6.png" alt />
        <span>在线听歌免流量</span>
        <em>〉</em>
      </div>

      <van-index-anchor class="anchor_title_three"></van-index-anchor>
      <div class="img_1">
        <img src="../../images/7.png" alt />
        <span>设置</span>
        <em>〉</em>
      </div>
      <div class="img_1">
        <img src="../../images/8.png" alt />
        <span>扫一扫</span>
        <em>〉</em>
      </div>
      <div class="img_1">
        <img src="../../images/9.png" alt />
        <span>个性换肤</span>
        <em>〉</em>
      </div>
      <div class="img_1">
        <img src="../../images/10.png" alt />
        <span>夜间模式</span>
        <em>〉</em>
      </div>
      <div class="img_1">
        <img src="../../images/11.png" alt />
        <span>定时关闭</span>
        <em>〉</em>
      </div>
      <div class="img_1">
        <img src="../../images/12.png" alt />
        <span>音乐闹钟</span>
        <em>〉</em>
      </div>
      <div class="img_1">
        <img src="../../images/13.png" alt />
        <span>驾驶模式</span>
        <em>〉</em>
      </div>
      <div class="img_1">
        <img src="../../images/5.png" alt />
        <span>宇天电台</span>
        <em>〉</em>
      </div>

      <van-index-anchor class="anchor_title_four"></van-index-anchor>
      <div class="img_1">
        <img src="../../images/15.png" alt />
        <span>分享宇天音乐</span>
        <em>〉</em>
      </div>
      <div class="img_1">
        <img src="../../images/16.png" alt />
        <span>关于宇天音乐</span>
        <em>〉</em>
      </div>
      <router-link :to="{name:'denglu'}">
        <!-- v-if="list.length?'':'你还没有粉丝'" -->
        <button v-if="this.$cookies.get('token')" class="btn_footer">退出登陆</button>
      </router-link>
    </div>
      </div>
    <div class="footer_one">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
import fans from "@/views/four/module/index.vue";
import Footer from "@/components/footer/index.vue";
export default {
  name: "Four",

  data(){
    return {
      img:this.$cookies.get('avatarUrl')
    }
  },

  components: {
    Footer,
    fans
  },
  methods: {
    delebtn() {
      this.axios.delete('http://localhost:3000/logout')
      .then(res=>{
        console.log(res)
        if(res.data.code==200){
           Dialog.confirm({
           title: "宇天音乐",
           message: "确认退出当前账号吗?"
      });
        }
      })
    },
    bttnn(){
      location.href="http://localhost:8080/#/denglu"
    }
  },
};


</script>

<style scoped>
.ppp_pp{
  width:100%;
  height:9rem;
}
.ppp1{
  text-align: center;
  line-height:3
}
.ppp2{
  text-align: center
}
.pppbtn{
  width:80%;
  height:2.5rem;
  border-radius:30px;
  margin-top:20px;
  margin-left:10%;
  border:none;
  border:1px solid #CCCCCC;
  background:white
}
* {
  margin: 0;
  padding: 0;
}
.main {
  background: #eeeff0;
  min-height: 10rem;
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
}
.header span {
  line-height: 2.5;
  color: white;
  font-size: 17px;
}
.header img {
  width: 2rem;
  height: 2rem;
  margin-top: 0.4rem;
  background: w;
}
/* 顶部父元素 */
.wrapper_276 {
  display: flex;
  width: 100%;
  height: 13.13rem;
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  top: -1.3rem;
  justify-content: space-around;
  border-top: 1px solid rgba(80, 80, 80, 1);
}
.box_border {
  width: 4.85rem;
  height: 4.85rem;
  color: rgba(80, 80, 80, 1);
  background-color: rgba(181, 181, 181, 1);
  border-radius: 2.43rem;
  font-size: 0.97rem;
  margin-top: 2rem;
}
.box_border img{width:100%}
.box_border img{border-radius:50%}
.all {
  width: 4rem;
  height: 4rem;
  margin-top: 2rem;
  margin-left: -20%;
}
.text {
  width: 12rem;
  height: 1.62rem;
  color: rgba(0, 0, 0, 1);
  font-size: 1.05rem;
  margin-top:13px
}
.grade {
  width: 3.23rem;
  height: 1.62rem;
  border: 1px solid rgba(128, 128, 128, 1);
  color: rgba(128, 128, 128, 1);
  box-shadow: rgba(128, 128, 128, 1) solid 0.08rem;
  border-radius: 0.81rem;
  font-size: 0.89rem;
  text-align:center;
  line-height:2
}
.btn {
  width: 3.66rem;
  height: 1.63rem;
  background: white;
  border: 1px solid red;
  border-radius: 50px 50px;
  color: red;
  text-align: center;
  margin-top: 3.3rem;
}

.fans {
  width: 100%;
  position: absolute;
}
.van-cell {
  height: 2.3rem;
  line-height: 2.5;
}
.anchor_title_one {
  margin-top: -10px;
}
.anchor_title_two {
  margin-top: 10px;
}
.anchor_title_three {
  margin-top: 10px;
}
.anchor_title_four {
  margin-top: 10px;
}
.btn_footer {
  width: 100%;
  height: 3rem;
  border: none;
  background: white;
  margin-top: 10px;
  margin-bottom:10px;
  color: red;
}
.img_1:active {
  background: rgba(181, 181, 181, 1);
}
.btn_footer:active {
  background: rgba(181, 181, 181, 1);
}
.img_1 {
  background: white;
  height: 2.6rem;
  line-height: 2.6;
}
.img_1 img {
  width: 20px;
  height: 20px;
  float: left;
  margin: 0 10px;
  margin-top: 11px;
}
.img_1 em {
  float: right;
}
.beij{width:100%;min-height:50px}
.footer_one{
  height:3rem;
}
</style>

