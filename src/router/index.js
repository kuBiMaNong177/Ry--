import Vue from 'vue'
import VueRouter from 'vue-router'
import oneRouter from '@/router/one'
import twoRouter from '@/router/two'
import threeRouter from '@/router/three'
import fourRouter from '@/router/four'

Vue.use(VueRouter)

const routes = [
  ...oneRouter,
  ...twoRouter,
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
    component: () => import('@/views/four/module/PL.vue'),
    children: [
      {
        path: '/soncomment',
        name: 'soncomment',
        component: () => import('@/views/four/module/soncomment.vue')
      },
      {
        path: '/sontransmit',
        name: 'sontransmit',
        component: () => import('@/views/four/module/sontransmit.vue')
      },
      {
        path: '/sonpraise',
        name: 'sonpraise',
        component: () => import('@/views/four/module/sonpraise.vue')
      },
      {
        path: '/play',
        name: 'PLAY',
        component: () => import('@/views/two/play.vue')
      }
    ],
    redirect: '/soncomment'
  },
  {
    path: '/*',
    redirect: '/index'
  }
]

const router = new VueRouter({
  routes
})

export default router
