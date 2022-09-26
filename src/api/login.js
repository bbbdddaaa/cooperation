import request from '@/utils/request'

export const getAuthCodeAPI = (AuthCodeToken) => {
  return request({
    url: `/api/user-service/user/imageCode/${AuthCodeToken}`,
    responseType: 'blob'
  })
}

export const loginAPI = (data) => {
  return request({
    url: '/api/user-service/user/login',
    method: 'POST',
    data
  })
}
