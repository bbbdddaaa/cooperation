export default {
  path: '/user',
  component: () => import('@/layout'),
  meta: { title: '人员管理', icon: 'dashboard' },
  children: [
    {
      path: 'index',
      name: 'index',
      component: () => import('@/views/user/index'),
      meta: { title: '人员列表', icon: 'dashboard' }
    },
    {
      path: 'user-task-stats',
      name: 'user-task-stats',
      component: () => import('@/views/user/userTaskTtats'),
      meta: { title: '人员统计', icon: 'dashboard' }
    },
    {
      path: 'user-work',
      name: 'user-work',
      component: () => import('@/views/user/userWork'),
      meta: { title: '工作量列表', icon: 'dashboard' }
    }
  ]
}
