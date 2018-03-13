import Mock from 'mockjs'
import loginAPI from './login'
import systemManagementAPI from './systemManagement'

Mock.setup({
  timeout: '350-600'
})

// 登录相关
Mock.mock('/system/user/login', 'post', loginAPI.login)

// 系统管理
Mock.mock('/systemManagement/getUserInfo', 'post', systemManagementAPI.getUserInfo)
