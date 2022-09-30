import request from '@/utils/request'
export const getRegionAPI = () => {
  return request({
    url: '/api/vm-service/region/search'
  })
}
