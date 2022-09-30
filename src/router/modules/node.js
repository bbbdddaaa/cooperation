export default {
  path: '/node',
  component: () => import('@/layout'),
  meta: { title: '点位管理', icon: 'dashboard' },
  children: [
    {
      path: 'region',
      name: 'region',
      component: () => import('@/views/node/region'),
      meta: { title: '区域管理', icon: 'dashboard' }
    },
    {
      path: 'node',
      name: 'node',
      component: () => import('@/views/node/node'),
      meta: { title: '点位管理', icon: 'dashboard' }
    },
    {
      path: 'partner',
      name: 'partner',
      component: () => import('@/views/node/partner'),
      meta: { title: '合作商管理', icon: 'dashboard' }
    }
  ]
}
