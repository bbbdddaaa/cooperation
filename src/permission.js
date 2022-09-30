import router from '@/router'
import store from '@/store'
import { getUserInfo } from '@/api/user'
const whiteList = ['/login', '/404']
router.beforeEach(async(to, from, next) => {
  if (store.getters.token) {
    const { data } = await getUserInfo(store.getters.userId)
    store.commit('user/SET_USERINFO', data)
    // console.log(data)
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
