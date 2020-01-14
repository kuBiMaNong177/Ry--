<template>
    <div class="content">
   <!-- banner -->
   <div class="banner">
     <div class="ban-l">
       <img src="" alt="">
     </div>
     <div class="ban-r">
       <h2>精品歌单></h2>
       <h3>评论过万的英文歌与潜力股</h3>
       <p>听歌写评论,平平更健康</p>
     </div>
   </div>
   <!-- 推荐MV -->
   <div class="tiu-jian-mv">
    <div class="tj-t">
      <h3>推荐MV></h3>
      <p>欧美 丨 民谣 | 电子</p>
    </div>
    <div class="tj-b">
      <ul>
        <li>
          <div class="tj-img">
            <img src="http://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1579225964&t=8603735a6d69de8fd2e60c7391fccccc" alt="">
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
.content .banner{width: 100%;height:9.7rem;background-color: rgba(136, 136, 136, 1);display: flex;}
.banner .ban-l{width: 7.82rem;height:7.82rem;widows: 7.82rem;background:red;margin:0.94rem 0.63rem 0;}
.banner .ban-r{height: 5.63rem;margin:0.94rem 0.63rem 0;line-height:2.1rem;}
.banner .ban-r h2{margin-bottom: 0.97rem;font-size: 1.29rem;color: rgba(255, 255, 255, 1);}
.banner .ban-r h3{font-size:1.13rem;color: rgba(255, 255, 255, 1);}
.banner .ban-r p{font-size:0.97rem;color: rgba(255, 255, 255, 1);}


/* 推荐MV */
.tiu-jian-mv .tj-t{width: 100%;height: 3.23rem;line-height:3.23rem;color:rgba(80, 80, 80, 1);font-size: 1.13rem;display: flex;justify-content: space-between;box-sizing: border-box;padding:0 1rem;}
.tiu-jian-mv .tj-b ul{display: flex;width: 100%;flex-wrap: wrap;justify-content: space-around;}
.tiu-jian-mv .tj-b ul li{width:12.69rem ;height:15.59rem;margin-bottom:0.98rem;}
.tiu-jian-mv .tj-b ul li .tj-img{width:12.69rem;height: 12.69rem;position: relative;}
.tiu-jian-mv .tj-b ul li .tj-img img{background:rgba(118, 118, 118, 1);width:100%;height:100%;}
.tiu-jian-mv .tj-b ul li .tj-img i{position: absolute;top: 0;right:4rem;font-size: 1.21rem;color: rgba(118, 118, 118, 1);}
.tiu-jian-mv .tj-b ul li .tj-img span{position: absolute;top: 0;right:0.8rem;font-size: 0.97rem;color: rgba(118, 118, 118, 1);}
.tiu-jian-mv .tj-b ul li p{height: 3.23rem;color: rgba(80, 80, 80, 1);font-size: 0.89rem;line-height:150%;}

</style>
