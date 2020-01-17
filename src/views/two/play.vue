<template>
  <div class="whole">
    <Header class="top">
      <ul class="topContent">
        <li>
          <img @click="moveBack()" src="../../img/two 图标7.png" />
        </li>
        <li>
          <p>{{MusicDetails.name}}</p>
          <span>{{MusicDetails.ar[0].name}}</span>
        </li>
        <li>
          <img src="../../img/two 图标12.png" />
        </li>
      </ul>
    </Header>
    <div class="content">
      <div class="play" @click="songHandle" v-show="lyric">
        <img :src="MusicDetails.al.picUrl" />
      </div>
      <div class="lyric" v-show="song" @click="songHandle">
        <p v-for="(item,index) in songList" :key="index">{{item}}</p>
      </div>
    </div>
    <div class="share">
      <ul>
        <li>
          <img src="../../img/two 图标17.svg" />
        </li>
        <li>
          <img @click="downLoad" src="../../img/two 图标18.svg" />
        </li>
        <li>
          <img @click="runSong" src="../../img/two 图标19.svg" />
        </li>
        <li>
          <img src="../../img/two 图标20.svg" />
        </li>
      </ul>
    </div>
    <footer>
      <div class="playMusic">
        <p>00:00</p>
        <div>
          <div></div>
        </div>
        <p>3:54</p>
      </div>
      <ul class="suspend">
        <li>
          <img src="../../img/two 图标21.svg" />
        </li>
        <li>
          <img src="../../img/two 图标22.svg" />
        </li>
        <li id="off">
          <audio ref="audio" :src="muiscList.url" autoplay loop></audio>
          <img @click="playHandle" v-if="play" src="../../img/two 图标23.svg" />
          <img @click="playHandle" v-else src="../../img/two 图标26.svg" />
        </li>
        <li>
          <img src="../../img/two 图标24.svg" />
        </li>
        <li>
          <img src="../../img/two 图标25.svg" />
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'play',
  data() {
    return {
      MusicDetails: {
        ar: [''],
        al: {}
      },

      lyric: true,
      song: false,

      songList: [],
      muiscList: {},

      isPlaying: true,

      play: true
      // suspend: false
    }
  },
  methods: {
    //点击下载
    downLoad() {
      let id = localStorage.getItem('id')
      this.axios.get('http://localhost:3000/song/url?id=' + id).then(res => {
        // console.log(res.data.data);
        if (res.data.data[0].url) {
          open(res.data.data[0].url)
        }
      })
    },
    runSong() {
      //点击这个点击事件拿id，传参，另一种query传参
      this.$router.push({
        name: 'songComment',
        query: {
          ids: this.muiscList.id
        }
      })
    },
    moveBack() {
      history.go(-1)
    },
    songHandle() {
      this.song = !this.song
      this.lyric = !this.lyric
    },
    playHandle() {
      if (this.play) {
        this.$refs.audio.pause()
      } else {
        this.$refs.audio.play()
      }
      this.play = !this.play
    }
  },
  created() {
    //从localStorage里面拿id， 赋值给musicId，让axios使用
    this.musicId = localStorage.getItem('id')

    // console.log(this.$route.query);
    this.musicId2 = this.$route.query.musicId

    this.axios
      .get(
        'http://localhost:3000/song/url?id=' +
          (this.musicId2 ? this.musicId2 : this.musicId)
      )
      .then(res => {
        this.muiscList = res.data.data[0]
      }),
      this.axios
        .get(
          'http://localhost:3000/song/detail?ids=' +
            (this.musicId2 ? this.musicId2 : this.musicId)
        )
        .then(res => {
          if (res.data.songs && res.data.songs.length > 0) {
            this.MusicDetails = res.data.songs[0]
          }
        }),
      this.axios
        .get(
          'http://localhost:3000/lyric?id=' +
            (this.musicId2 ? this.musicId2 : this.musicId)
        )
        .then(res => {
          let arr = res.data.lrc.lyric
            .replace(/[(\d)*]/g, '')
            .replace(/[.*]/g, '')
            .replace(/[:*]/g, '')
            .replace(/[\[]*]/g, '|')
            .split('|')
          this.songList = arr
        })
  }
}
</script>

<style scoped>
.top {
  width: 100%;
  height: 2.75rem;
}
.topContent {
  width: 100%;
  height: 3.6rem;
  display: flex;
  justify-content: space-around;
  background: rgba(80, 80, 80, 0.7);
}
.topContent > li {
  width: 33.33%;
}
.topContent > li:nth-child(1) > img {
  width: 0.6rem;
  height: 1rem;
  margin-top: 1.3rem;
  margin-left: 1.3rem;
}
.topContent > li:nth-child(2) > p {
  width: 100%;
  height: 1.18rem;
  font-size: 0.88rem;
  color: rgba(80, 80, 80, 1);
  text-align: center;
  margin-top: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.topContent > li:nth-child(2) > span {
  display: block;
  color: rgba(80, 80, 80, 1);
  font-size: 0.69rem;
  text-align: center;
  width: 100%;
  height: 1.18rem;
  overflow: hidden;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 0.3rem;
}
.topContent > li:nth-child(3) > img {
  width: 1.8rem;
  height: 1.8rem;
  margin-top: 1rem;
  margin-left: 6rem;
}
.content {
  width: 100%;
  height: 30rem;
  margin-top: 0.8rem;
  overflow: hidden;
  flex: 1;
  overflow-y: auto;
}
.play {
  width: 10.5rem;
  height: 10.5rem;
  margin: 7rem auto;
  border: solid 2.5rem #000000;
  border-radius: 50%;
  animation: haha1 19s linear infinite;
}
@keyframes haha1 {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

.play > img {
  width: 10.5rem;
  height: 10.5rem;
  border-radius: 50%;
}
.lyric {
  width: 100%;
  min-height: 30rem;
  padding-top: 12rem;
}
.lyric > p {
  text-align: center;
  line-height: 2rem;
}
.share > ul {
  display: flex;
  justify-content: space-around;
}
.share > ul > li {
  width: 25%;
  height: 3rem;
}
.share > ul > li > img {
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.8rem auto;
}
.share > ul > li:nth-child(3) > a > img {
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.8rem auto;
}
.playMusic {
  width: 100%;
  height: 4rem;
}
.playMusic > p {
  float: left;
  width: 3.13rem;
  height: 4rem;
  color: rgba(80, 80, 80, 1);
  font-size: 0.63rem;
  line-height: 4rem;
  text-align: center;
}
.playMusic > div {
  width: 19.6rem;
  height: 0.06rem;
  background-color: rgba(153, 153, 153, 1);
  float: left;
  margin: auto;
  margin-top: 2rem;
}
.playMusic > div > div {
  width: 0.63rem;
  height: 0.63rem;
  background-color: rgba(153, 153, 153, 1);
  border-radius: 50%;
  margin-top: -0.3rem;
}
.suspend {
  display: flex;
  justify-content: space-around;
}

.suspend > li:nth-child(1) > img {
  width: 1.63rem;
  height: 1.63rem;
  margin-top: 1.3rem;
}
.suspend > li:nth-child(2) > img {
  width: 2.13rem;
  height: 2.13rem;
  margin-top: 1rem;
}
.suspend > li:nth-child(3) > img {
  width: 3.5rem;
  height: 3.5rem;
  margin-top: 0.5rem;
}
.suspend > li:nth-child(4) > img {
  width: 2.13rem;
  height: 2.13rem;
  margin-top: 1rem;
}
.suspend > li:nth-child(5) > img {
  width: 1.5rem;
  height: 1.5rem;

  margin-top: 1.3rem;
  margin-left: 1rem;
}
</style>

