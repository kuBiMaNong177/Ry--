import Vue from 'vue'
import VueRouter from 'vue-router'

import oneRouter from '@/router/one'
import twoRouter from '@/router/two'
import threeRouter from '@/router/three'
import fourRouter from '@/router/four'


Vue.use(VueRouter)

const routes = [
  oneRouter,
  twoRouter,
  threeRouter,
  fourRouter
]

const router = new VueRouter({
  routes
})

export default router
