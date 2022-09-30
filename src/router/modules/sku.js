export default {
  path: '/sku',
  component: () => import('@/layout'),
  meta: { title: '商品管理', icon: 'dashboard' },
  children: [
    {
      path: 'sku-class',
      name: 'sku-class',
      component: () => import('@/views/sku/skuClass'),
      meta: { title: '商品类型', icon: 'dashboard' }
    },
    {
      path: 'sku',
      name: 'sku',
      component: () => import('@/views/sku/sku'),
      meta: { title: '商品管理', icon: 'dashboard' }
    }
  ]
}
