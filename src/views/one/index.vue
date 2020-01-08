<template>
  <div class="main">
    <Header></Header>
    <div class="content">
      <h1>one 页面</h1>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Footer from '@/components/footer/index.vue'
import Header from '@/components/header/index.vue'

export default {
  name:'One',
  components:{
    Footer,
    Header
  }
}
</script>

<style scoped>

</style>
