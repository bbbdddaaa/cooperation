import request from '@/utils/request'
export const getTaskStatusAPI = () => {
  return request({
    url: '/api/task-service/task/allTaskStatus'
  })
}

export const getTaskListAPI = () => {
  return request({
    url: '/api/task-service/taskType/list'
  })
}

export const getTaskSupplyAlertValueAPI = () => {
  return request({
    url: '/api/task-service/task/supplyAlertValue'
  })
}
