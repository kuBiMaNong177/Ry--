<template>
   <div class="content">
        <div class="tiu-jian-mv">
          <div class="tj-t">
            云音乐官方榜
          </div>
          <div class="tj-b">
            <ul>
              <li>
                <div class="tj-img">
                  <img src="" alt="" />
                  <h2>飙升榜</h2>
                </div>
                <div class="tj-txt">
                  <p>1. Put Em Up -W & W </p>
                  <p>2. Put Em Up -W & W </p>
                  <p>3. Put Em Up -W & W </p>
                </div>
              </li>
              <li>
                <div class="tj-img">
                  <img src="" alt="" />
                  <h2>热歌榜</h2>
                </div>
                <div class="tj-txt">
                  <p>1. 动物世界  -  薛之谦</p>
                  <p>2. 高尚  -  薛之谦 </p>
                  <p>3. 木偶人 -  薛之谦 </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 脱口秀 -->
        <div class="tiu-jian">
          <div class="tj-t">
           全球榜>
          </div>
          <div class="tj-b">
            <ul>
              <li>
                <div class="tj-img">
                  <img src="" alt="" />
                </div>
                <p>年度最受欢迎个性推进按歌曲</p>
              </li>
              <li>
                <div class="tj-img">
                  <img src="" alt="" />
                </div>
                <p>年度最受欢迎个性推进按歌曲</p>
              </li>
              <li>
                <div class="tj-img">
                  <img src="" alt="" />
                </div>
                <p>年度最受欢迎个性推进按歌曲</p>
              </li>
            </ul>
          </div>
        </div>
         <!-- 脱口秀 -->
        <div class="tiu-jian">
          <div class="tj-t">
           用户榜>
          </div>
          <div class="tj-b">
            <ul>
              <li>
                <div class="tj-img">
                  <img src="" alt="" />
                </div>
                <p>年度最受欢迎个性推进按歌曲</p>
              </li>
              <li>
                <div class="tj-img">
                  <img src="" alt="" />
                </div>
                <p>年度最受欢迎个性推进按歌曲</p>
              </li>
              <li>
                <div class="tj-img">
                  <img src="" alt="" />
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
/* 每天听些好节目 */
.tiu-jian-mv .tj-t{width: 100%;height: 3.23rem;line-height:3.23rem;color:rgba(80, 80, 80, 1);font-size: 1.13rem;font-weight:600;}
.tiu-jian-mv .tj-b ul{width: 100%;}
.tiu-jian-mv .tj-b ul li{width:100%;height:7.86rem;margin-bottom:0.98rem;display: flex;}
.tiu-jian-mv .tj-b ul li .tj-img{width:7.86rem;height: 7.86rem;background-color: gray;margin-right:0.81rem;position: relative;}
.tiu-jian-mv .tj-b ul li .tj-img h2{position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin:auto;width: 7rem;height: 2rem;text-align: center;}
.tiu-jian-mv .tj-b ul li .tj-img img{background:rgba(118, 118, 118, 1);width: 100%;height: 100%;}
.tiu-jian-mv .tj-b ul li .tj-txt p{line-height: 2.5rem;color:rgba(80, 80, 80, 1);font-size: 0.97rem;}

/* 脱口秀 */
.tiu-jian .tj-t{width: 100%;height: 3.23rem;line-height:3.23rem;color:rgba(80, 80, 80, 1);font-size: 1.13rem;font-weight: 600;}
.tiu-jian .tj-b ul{width: 100%;display: flex;justify-content: space-around;}
.tiu-jian .tj-b ul li{width:8.49rem;height:11.76rem;margin-bottom:0.98rem;}
.tiu-jian .tj-b ul li .tj-img{width:8.49rem;height: 8.49rem;background-color: gray;margin-bottom:0.4rem;}
.tiu-jian .tj-b ul li .tj-img img{background:rgba(118, 118, 118, 1);width: 100%;height: 100%;}
.tiu-jian .tj-b ul li .tj-txt p{line-height: 2.34rem;color:rgba(128, 128, 128, 1);font-size: 0.89rem;width:19rem;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}

</style>
