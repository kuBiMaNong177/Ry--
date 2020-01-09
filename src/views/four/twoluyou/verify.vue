<template>
  <div class="over">
    <div class="denglu">
      <button @click="btns">〈</button>
      <p>手机号验证</p>
    </div>
    <p class="pp">为了安全,我们会向你的手机发送短信验证码</p>
    <div class="input_1">
      <img class="img" src="../../../images/yaoshi.png" alt />
      <input class="ipt1" placeholder="输入验证码" type="text" />
    </div>

    <button class="btn">下一步</button>
  </div>
</template>
<script>
export default {
    methods: {
        btns(){
            history.go(-1)
        }
    },
};
</script>
<style scoped>
.denglu {
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}
.denglu p {
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.denglu button {
  position: absolute;
  float: left;
  margin-left: 6px;
  font-size: 20px;
  border: none;
  background: white;
}
.ipt1 {
  width: 86%;
  margin-top: 30px;
  margin-left:10px;
  height: 1.9rem;
  border: none;
  position: absolute;
  top: -30px;
}
.input_1 {
  border: solid 2px #ccc;
  width: 80%;
  height: 2rem;
  position: relative;
  top: 20px;
  margin-left: 10%;
}


.img {
  width: 30px;
  height: 30px;
  float: left;
}

.btn {
  width: 80%;
  height: 3rem;
  background-color: rgba(0, 0, 0, 1);
  color:white;
  margin-top:50px;
  margin-left:10%;
  border:none
}
.pp{  
    color: rgba(128, 128, 128, 1);
	font-size: 11px;
    margin-left:10%;
    margin-top:20px
}
.over{
    overflow-y:hidden;
}
</style>