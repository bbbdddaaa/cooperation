import request from '@/utils/request'

export function getUserInfo(id) {
  return request({
    url: `/api/user-service/user/${id}`
  })
}
