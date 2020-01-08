<template>
  <div class="main">
    <Header></Header>
    <div class="content">
      <h1>four 页面</h1>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Footer from '@/components/footer/index.vue'
import Header from '@/components/header/index.vue'
export default {
  name:'Four',

  components:{
    Footer,
    Header
  }
}
</script>

<style scoped>

</style>
