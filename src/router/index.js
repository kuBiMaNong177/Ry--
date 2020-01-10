import Vue from "vue";
import VueRouter from "vue-router";

import oneRouter from "@/router/one";
import twoRouter from "@/router/two";
import threeRouter from "@/router/three";
import fourRouter from "@/router/four";

Vue.use(VueRouter);

Vue.use(VueRouter);

const routes = [
  oneRouter,
<<<<<<< HEAD
  ...twoRouter,
=======
>>>>>>> 60e3f274d99352a91811be2e553957f6adb42e88
  threeRouter,
  fourRouter,
  ...twoRouter,
  {
    //登陆路由
    path: "/denglu",
    name: "denglu",
    component: () => import("../views/four/twoluyou/denglu.vue")
  },
  {
    //手机号登陆路由
    path: "/phone",
    name: "phone",
    component: () => import("@/views/four/twoluyou/phonelogin.vue")
  },
  {
    //手机号注册路由
    path: "/enroll",
    name: "enroll",
    component: () => import("@/views/four/twoluyou/enroll.vue")
  },
<<<<<<< HEAD
  {
    path: "/verify",
    name: "verify",
    component: () => import("@/views/four/twoluyou/verify")
  }
];
=======
  {  //手机号登陆路由
    path: '/phone',
    name: 'phone',
    component: () => import('@/views/four/twoluyou/phonelogin.vue'),
  },
  {  //手机号注册路由
    path: '/enroll',
    name: 'enroll',
    component: () => import('@/views/four/twoluyou/enroll.vue'),
  },
  {  //关注
    path: '/attention',
    name: 'attention',
    component: () => import('@/views/four/module/attention.vue'),
  }
]

>>>>>>> 60e3f274d99352a91811be2e553957f6adb42e88

const router = new VueRouter({
  routes
});

export default router;
