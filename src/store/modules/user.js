import { getAuthCodeAPI, loginAPI } from '@/api/login'
export default {
  namespaced: true,
  state: {
    clientToken: null,
    AuthCodeToken: null,
    token: null,
    userInfo: {},
    userId: null
  },

  mutations: {
    SET_TOKEN(state, clientToken) {
      state.clientToken = clientToken
    },
    SET_AUTHCODETOKEN(state, AuthCodeToken) {
      state.AuthCodeToken = AuthCodeToken
    },
    token(state, token) {
      state.token = token
    },
    SET_USERINFO(state, userInfo) {
      state.userInfo = userInfo
    },
    SET_USERID(state, userId) {
      state.userId = userId
    },
    DEL_TOKEN(state) {
      state.token = null
      state.userInfo = {}
    }
  },
  actions: {
    async loginAction(context, loginData) {
      const res = await getAuthCodeAPI(loginData)
      const blob = new Blob([res.data], { type: 'application/vnd.ms-excel' })
      const url = window.URL.createObjectURL(blob)
      context.commit('SET_TOKEN', url)
      context.commit('SET_AUTHCODETOKEN', loginData)
    },
    async login(context, loginData) {
      const res = await loginAPI(loginData)
      console.log(res)
      context.commit('token', res.data.token)
      context.commit('SET_USERID', res.data.userId)
    },
    logout(context) {
      context.commit('DEL_TOKEN')
    }
  }
}
