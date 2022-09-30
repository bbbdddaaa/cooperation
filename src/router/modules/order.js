export default {
  path: '/order',
  component: () => import('@/layout'),
  children: [
    {
      path: 'index',
      name: 'index',
      component: () => import('@/views/order'),
      meta: { title: '订单管理', icon: 'dashboard' }
    }
  ]
}
