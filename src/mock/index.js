import Mock from 'mockjs'
import loginAPI from './login'

Mock.setup({
  timeout: '350-600'
})

// 登录相关
Mock.mock('/system/user/login', 'post', loginAPI.login)
