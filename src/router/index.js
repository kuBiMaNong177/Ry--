import Vue from "vue";
import VueRouter from "vue-router";

import oneRouter from "@/router/one";
import twoRouter from "@/router/two";
import threeRouter from "@/router/three";
import fourRouter from "@/router/four";

Vue.use(VueRouter);

Vue.use(VueRouter)

const routes = [
  oneRouter,
  ...twoRouter,
  threeRouter,
  fourRouter,
  {
    //登陆路由
    path: '/denglu',
    name: 'denglu',
    component: () => import('../views/four/twoluyou/denglu.vue'),
  },
  {  //手机号登陆路由
    path: '/phone',
    name: 'phone',
    component: () => import('@/views/four/twoluyou/phonelogin.vue'),
  }, 
  {  //手机号注册路由
    path: '/enroll',
    name: 'enroll',
    component: () => import('@/views/four/twoluyou/enroll.vue'),
  },{
    path:'/verify',
    name:'verify',
    component: () => import('@/views/four/twoluyou/verify'),
  }
]

// const routes = [oneRouter, ...twoRouter, threeRouter, fourRouter];


const router = new VueRouter({
  routes
});

export default router;
