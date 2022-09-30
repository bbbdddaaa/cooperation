export default {
  path: '/report',
  component: () => import('@/layout'),
  children: [
    {
      path: 'index',
      name: 'index',
      component: () => import('@/views/report'),
      meta: { title: '对账统计', icon: 'dashboard' }
    }
  ]
}
