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
    //主播音乐电台排行榜
    path: '/ranking',
    name: 'ranking',
    component: () => import('@/views/one/ranking.vue'),
    children: [
      {
        path: '/ranking_one',
        name: 'ranking_one',
        component: () => import('@/views/one/ranking_one.vue')
      },
      {
        path: '/ranking_two',
        name: 'ranking_two',
        component: () => import('@/views/one/ranking_two.vue')
      },
      {
        path: '/ranking_three',
        name: 'ranking_three',
        component: () => import('@/views/one/ranking_three.vue')
      }
    ]
  },
  {
    //24小时榜
    path: '/one_time',
    name: 'one_time',
    component: () => import('@/views/one/one_time.vue')
  },
  {
    //新人榜
    path: '/one_new',
    name: 'one_new',
    component: () => import('@/views/one/one_new.vue')
  },
  {
    //动态
    path: '/dynamichou',
    name: 'dynamichou',
    component: () => import('@/views/four/module/dynamichou.vue')
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
