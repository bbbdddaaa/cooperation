export default {
  path: '/policy',
  component: () => import('@/layout'),
  children: [
    {
      path: 'index',
      name: 'index',
      component: () => import('@/views/policy'),
      meta: { title: '策略管理', icon: 'dashboard' }
    }
  ]
}
