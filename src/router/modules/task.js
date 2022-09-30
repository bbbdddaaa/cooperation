export default {
  path: '/task',
  component: () => import('@/layout'),
  meta: { title: '工单管理', icon: 'dashboard' },
  children: [
    {
      path: 'business',
      name: 'business',
      component: () => import('@/views/task/business'),
      meta: { title: '运营工单', icon: 'dashboard' }
    },
    {
      path: 'operation',
      name: 'operation',
      component: () => import('@/views/task/operation'),
      meta: { title: '运维工单', icon: 'dashboard' }
    }
  ]
}
