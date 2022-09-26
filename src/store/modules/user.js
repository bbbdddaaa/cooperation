import { getAuthCodeAPI, loginAPI } from '@/api/login'
export default {
  namespaced: true,
  state: {
    clientToken: null,
    AuthCodeToken: '',
    token: ''
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
    }
  }
}
