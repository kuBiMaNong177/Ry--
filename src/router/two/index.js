export default [
  {
    path: '/two',
    name: 'two',
    component: () => import('@/views/two')
  },
  {
    path: '/songSheet',
    name: 'songSheet',
    component: () => import('@/views/two/songSheet')
  },
  {
    path: '/songComment',
    name: 'songComment',
    component: () => import('@/views/two/songComment')
  }
]
