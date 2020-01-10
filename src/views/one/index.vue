<template>
  <div class="main">
    <Header></Header>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
<<<<<<< HEAD
import Footer from "@/components/footer/index.vue";
import Header from "@/components/header/index.vue";
=======


import Footer from '@/components/footer/index.vue'
import Header from '@/views/one/header.vue'
>>>>>>> 2c01892e1b41c7e97fb57cafc4f2568b117cabc1

export default {
  name: "One",
  components: {
    Footer,
    Header
  }
};
</script>

<style scoped>
<<<<<<< HEAD
=======


>>>>>>> 2c01892e1b41c7e97fb57cafc4f2568b117cabc1
</style>
