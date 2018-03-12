import fetch from '@/utils/fetch'

export function loginByUsername (userLoginName, password) {
  const data = {
    userLoginName,
    password
  }
  return fetch({
    url: '/system/user/login',
    method: 'post',
    data
  })
}
