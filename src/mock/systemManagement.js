import Mock from 'mockjs'

const userInfoList = []
const count = 100

for (let i = 0; i < count; i++) {
  userInfoList.push(Mock.mock({
    userLoginName: '@name',
    userName: '@cname',
    userMail: '@email("163.com")',
    lastLoginIp: '@ip',
    lastLoginTime: '@datetime("yyyy-MM-dd HH:mm:ss")',
    currentLoginIp: '@ip',
    currentLoginTime: '@datetime("yyyy-MM-dd HH:mm:ss")',
    'createName|1': ['系统管理员', '其它'],
    createTime: '@datetime("yyyy-MM-dd HH:mm:ss")',
    'modifyName|1': ['系统管理员', '其它'],
    modifyTime: '@datetime("yyyy-MM-dd HH:mm:ss")',
    'userState|1': ['00', '01']
  }))
}
export default {
  getUserInfo: () => {
    return userInfoList
  }
}
