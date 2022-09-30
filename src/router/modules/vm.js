export default {
  path: '/vm',
  component: () => import('@/layout'),
  meta: { title: '设备管理', icon: 'dashboard' },
  children: [
    {
      path: 'index',
      name: 'index',
      component: () => import('@/views/vm/index'),
      meta: { title: '设备管理', icon: 'dashboard' }
    },
    {
      path: 'status',
      name: 'status',
      component: () => import('@/views/vm/status'),
      meta: { title: '设备状态', icon: 'dashboard' }
    },
    {
      path: 'type',
      name: 'type',
      component: () => import('@/views/vm/type'),
      meta: { title: '设备类型管理', icon: 'dashboard' }
    }
  ]
}
