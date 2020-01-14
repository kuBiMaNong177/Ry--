import Vue from 'vue'
import VueRouter from 'vue-router'
import oneRouter from '@/router/one'
import twoRouter from '@/router/two'
import threeRouter from '@/router/three'
import fourRouter from '@/router/four'

Vue.use(VueRouter)

const routes = [
  oneRouter,
  threeRouter,
  fourRouter,
  ...twoRouter,
  {
    //登陆路由
    path: '/denglu',
    name: 'denglu',
    component: () => import('../views/four/twoluyou/denglu.vue')
  },
  {
    //手机号登陆路由
    //登陆页面
    path: '/phone',
    name: 'phone',
    component: () => import('@/views/four/twoluyou/phonelogin.vue')
  },
  {
    //手机号注册路由
    path: '/enroll',
    name: 'enroll',
    component: () => import('@/views/four/twoluyou/enroll.vue')
  },
  {
    //手机号登陆路由
    path: '/phone',
    name: 'phone',
    component: () => import('@/views/four/twoluyou/phonelogin.vue')
  },
  {
    //手机号注册路由
    path: '/enroll',
    name: 'enroll',
    component: () => import('@/views/four/twoluyou/enroll.vue')
  },
  {
    //关注
    path: '/attention',
    name: 'attention',
    component: () => import('@/views/four/module/attention.vue')
  },
  //音乐播放路由
  {
    path: '/play',
    name: 'play',
    component: () => import('@/views/two/play.vue')
  },

  {
    //粉丝
    path: '/fons',
    name: 'fons',
    component: () => import('@/views/four/module/fons.vue')
  },
  {
    //动态
    path: '/dynamic',
    name: 'dynamic',
    component: () => import('@/views/four/module/dynamic.vue')
  },
  {
    //评论
    path: '/PL',
    name: 'PL',
    component: () => import('@/views/four/module/PL.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
