export default{
    path:'/',
    name:'one',
    component:()=>import ('@/views/one'),
    children:[
      {
        path:'/',
        name:'one',
        component:()=>import('@/views/one/gexing.vue')
      },
      {
        path:'/gedan',
        name:'Gedan',
        component:()=>import('@/views/one/gedan.vue')
      },
      {
        path:'/zhubo',
        name:'Zhubo',
        component:()=>import('@/views/one/zhubo.vue')
      },
      {
        path:'/paihang',
        name:'Paihang',
        component:()=>import('@/views/one/paihang.vue')
      }
    ]
}
