import fetch from '@/utils/fetch'

export function getUserInfo (data) {
  return fetch({
    url: '/systemManagement/getUserInfo',
    method: 'post',
    data
  })
}
