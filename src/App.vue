<template>
  <keep-alive>
    <!-- <transition name="slide-fade"> -->

<transition>
    <router-view></router-view>
    </transition>
  </keep-alive>
</template>

// <style lang="scss">

//       html{
//         // font-size: calc( 100vw / 7.5 )
//       }
//       // 页面从右侧滑出左侧消失特效
//       #app{
//         // width: 100%;
//         // padding-top: 46px;
//         padding-bottom: 50px;
//         overflow-x: hidden;
//         font-size: 14px;
//       }
//       .v-enter{
//         opacity: 0;
//         transform: translateX(100%);
//       }
//       .v-leave-to{
//         opacity: 0;
//         transform: translateX(-100%);
//         // 解决页面从上往下位移问题
//         position: absolute;
//       }
//       .v-enter-active,.v-leave-active{
//         transition: all 0.35s ease;
//       }
//     </style>



