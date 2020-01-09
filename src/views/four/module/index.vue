<template>
  <div>
    <ul class="ccc">
      <li class="ccc_1">
        动态
        <br />
        <span>0</span>
      </li>
      <li class="ccc_2">
        关注
        <br />
        <span>0</span>
      </li>
      <li class="ccc_3">
        粉丝
        <br />
        <span>0</span>
      </li>
      <li class="ccc_4">我的资料</li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.ccc {
  display: flex;
  justify-content: space-around;
  margin-top: 9rem;
  color: rgba(153, 153, 153, 1);
  text-align:center;
    border-top:1px solid #CCCCCC;

}
.ccc_1{margin-top:0.3rem}
.ccc_2{margin-top:0.3rem}
.ccc_3{margin-top:0.3rem}
.ccc_4 {
  margin-top: 0.6rem;
}

</style>