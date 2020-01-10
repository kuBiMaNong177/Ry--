<template>
  <div class="content">

   <div class="banner">
     <img src="" alt="">
   </div>
   <div class="siren">
     <div class="s-con">
       <p><i class="iconfont icon-diantai"></i></p>
       <span>私人FM</span>
     </div>
     <div class="s-con">
      <p><i class="iconfont icon-riqi"></i></p>
      <span>私人FM</span>
    </div>
    <div class="s-con">
      <p><i class="iconfont icon-paihangbang"></i></p>
      <span>私人FM</span>
    </div>
   </div>
   <!-- 推荐歌单 -->
   <div class="tiu-jian">
    <div class="tj-t">
      推荐歌单>
    </div>
    <div class="tj-b">
      <ul>
        <li>
          <div class="tj-img">
            <img src="" alt="">
            <i class="iconfont icon-yinyue"></i>
            <span>207万</span>
          </div>
          <p>年度最受欢迎个性推进按歌曲</p>
        </li>
        <li>
          <div class="tj-img">
            <img src="" alt="">
            <i class="iconfont icon-yinyue"></i>
            <span>207万</span>
          </div>
          <p>年度最受欢迎个性推进按歌曲</p>
        </li>
        <li>
          <div class="tj-img">
            <img src="" alt="">
            <i class="iconfont icon-yinyue"></i>
            <span>207万</span>
          </div>
          <p>年度最受欢迎个性推进按歌曲</p>
        </li>
        <li>
          <div class="tj-img">
            <img src="" alt="">
            <i class="iconfont icon-yinyue"></i>
            <span>207万</span>
          </div>
          <p>年度最受欢迎个性推进按歌曲</p>
        </li>
        <li>
          <div class="tj-img">
            <img src="" alt="">
            <i class="iconfont icon-yinyue"></i>
            <span>207万</span>
          </div>
          <p>年度最受欢迎个性推进按歌曲</p>
        </li>
        <li>
          <div class="tj-img">
            <img src="" alt="">
            <i class="iconfont icon-yinyue"></i>
            <span>207万</span>
          </div>
          <p>年度最受欢迎个性推进按歌曲</p>
        </li>
      </ul>
    </div>
   </div>
   <!-- 最新音乐 -->
   <div class="tiu-jian">
    <div class="tj-t">
      最新音乐>
    </div>
    <div class="tj-b">
      <ul>
        <li>
          <div class="tj-img">
            <img src="" alt="">
            <i class="iconfont icon-yinyue"></i>
            <span>207万</span>
          </div>
          <p>年度最受欢迎个性推进按歌曲</p>
        </li>
        <li>
          <div class="tj-img">
            <img src="" alt="">
            <i class="iconfont icon-yinyue"></i>
            <span>207万</span>
          </div>
          <p>年度最受欢迎个性推进按歌曲</p>
        </li>
        <li>
          <div class="tj-img">
            <img src="" alt="">
            <i class="iconfont icon-yinyue"></i>
            <span>207万</span>
          </div>
          <p>年度最受欢迎个性推进按歌曲</p>
        </li>
        <li>
          <div class="tj-img">
            <img src="" alt="">
            <i class="iconfont icon-yinyue"></i>
            <span>207万</span>
          </div>
          <p>年度最受欢迎个性推进按歌曲</p>
        </li>
        <li>
          <div class="tj-img">
            <img src="" alt="">
            <i class="iconfont icon-yinyue"></i>
            <span>207万</span>
          </div>
          <p>年度最受欢迎个性推进按歌曲</p>
        </li>
        <li>
          <div class="tj-img">
            <img src="" alt="">
            <i class="iconfont icon-yinyue"></i>
            <span>207万</span>
          </div>
          <p>年度最受欢迎个性推进按歌曲</p>
        </li>
      </ul>
    </div>
   </div>
   <!-- 推荐MV -->
   <div class="tiu-jian-mv">
    <div class="tj-t">
      推荐MV>
    </div>
    <div class="tj-b">
      <ul>
        <li>
          <div class="tj-img">
            <img src="" alt="">
          </div>
          <div class="tj-txt">
            <p>Paradise 特别影响</p>
            <p>GoT7</p>
          </div>
        </li>
        <li>
          <div class="tj-img">
            <img src="" alt="">
          </div>
          <div class="tj-txt">
            <p>近在千里</p>
          <p>周柏豪/卫兰</p>
          </div>
        </li>
        <li>
          <div class="tj-img">
            <img src="" alt="">
          </div>
          <div class="tj-txt">
            <p>最爱</p>
          <p>古巨基</p>
          </div>
        </li>
        <li>
          <div class="tj-img">
            <img src="" alt="">
          </div>
          <div class="tj-txt">
            <p>This Old Dog</p>
          <p>Mac Demarco</p>
          </div>
        </li>
      </ul>
    </div>
   </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* content */
.content{flex:1;overflow-y: auto;}
.content::-webkit-scrollbar {
  display: none;
}

.content .banner{width: 100%;height:8.89rem;background-color: rgba(238, 238, 238, 1);}

.content .siren{width:100%;height:6.47rem;display: flex;justify-content: space-between;margin:1.29rem 0;}
.content .siren .s-con{flex: 1;height:6.47rem;text-align: center;}
.content .siren .s-con p{ width:4.04rem ; height: 4.04rem; background-color: rgba(238, 238, 238, 1); margin:0 auto; border-radius: 50%; -webkit-border-radius: 50%; -moz-border-radius: 50%; -ms-border-radius: 50%; -o-border-radius: 50%; }
.content .siren .s-con p i{line-height:4.04rem;font-size:2.1rem;}
.content .siren .s-con span{line-height:2.43rem;color: rgba(80, 80, 80, 1);font-size:0.97rem;}

.tiu-jian .tj-t{width: 100%;height: 3.23rem;line-height:3.23rem;color:rgba(80, 80, 80, 1);font-size: 1.13rem;}
.tiu-jian .tj-b ul{display: flex;width: 100%;flex-wrap: wrap;justify-content: space-between;}
.tiu-jian .tj-b ul li{width:8.49rem ;height:12.37rem;margin-bottom:0.98rem;}
.tiu-jian .tj-b ul li .tj-img{width:8.49rem;height: 8.49rem;position: relative;}
.tiu-jian .tj-b ul li .tj-img img{background:rgba(118, 118, 118, 1);}
.tiu-jian .tj-b ul li .tj-img i{position: absolute;top: 0;right:4rem;font-size: 1.21rem;color: rgba(118, 118, 118, 1);}
.tiu-jian .tj-b ul li .tj-img span{position: absolute;top: 0;right:0;font-size: 0.97rem;color: rgba(118, 118, 118, 1);}
.tiu-jian .tj-b ul li p{height: 3.88rem;color: rgba(80, 80, 80, 1);font-size: 0.89rem;line-height:150%;padding-top:10px;box-sizing: border-box;}
/* 推荐MV */
.tiu-jian-mv .tj-t{width: 100%;height: 3.23rem;line-height:3.23rem;color:rgba(80, 80, 80, 1);font-size: 1.13rem;}
.tiu-jian-mv .tj-b ul{display: flex;width: 100%;flex-wrap: wrap;justify-content: space-between;}
.tiu-jian-mv .tj-b ul li{width:12.69rem ;height:11.16rem;margin-bottom:0.98rem;}
.tiu-jian-mv .tj-b ul li .tj-img{width:12.69rem;height:7.28rem;}
.tiu-jian-mv .tj-b ul li .tj-img img{background:rgba(118, 118, 118, 1);}
.tiu-jian-mv .tj-b ul li .tj-txt{width:12.69rem ;height:3.88rem;}
.tiu-jian-mv .tj-b ul li p{ color: rgba(80, 80, 80, 1);font-size: 0.89rem;line-height:110%;padding-top:10px;box-sizing: border-box;}

</style>
