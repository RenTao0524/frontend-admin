import Vue from 'vue'
import Router from 'vue-router'
const loginPage = () => import('@/views/loginPage/index')
const errorPage404 = () => import('@/views/errorPage/404')
const errorPage401 = () => import('@/views/errorPage/401')
const layout = () => import('@/views/layout/layout')
// 运营管理
const recommendPage = () => import('@/views/operationManagement/recommendPage')
const equityPage = () => import('@/views/operationManagement/equityPage')
// 会员管理
const memberListPage = () => import('@/views/memberManagement/memberListPage')
const oPointDetailPage = () => import('@/views/memberManagement/oPointDetailPage')
const memberImportDataPage = () => import('@/views/memberManagement/memberImportDataPage')
const memberImportLogPage = () => import('@/views/memberManagement/memberImportLogPage')
// 欧点管理
const oPointStatisticsPage = () => import('@/views/oPointManagement/oPointStatisticsPage')
const oPointImportPage = () => import('@/views/oPointManagement/oPointImportPage')
// 消息管理
const messagePage = () => import('@/views/messageManagement/index')
// 审核管理
const auditPage = () => import('@/views/auditManagement/auditPage')
const reviewPage = () => import('@/views/auditManagement/reviewPage')
const auditLogPage = () => import('@/views/auditManagement/auditLogPage')
// 系统管理
const userManagementPage = () => import('@/views/systemManagement/user/index')
const roleManagementPage = () => import('@/views/systemManagement/role/index')
const permissionManagementPage = () => import('@/views/systemManagement/permission/index')

Vue.use(Router)

const routes = [
  { path: '/', redirect: '/loginPage' },
  { path: '/loginPage', component: loginPage },
  { path: '/404', component: errorPage404 },
  { path: '/401', component: errorPage401 },
  {
    path: '/layout',
    component: layout,
    children: [
      { path: 'recommendPage', component: recommendPage },
      { path: 'equityPage', component: equityPage },
      { path: 'memberListPage', component: memberListPage },
      { path: 'oPointDetailPage', component: oPointDetailPage },
      { path: 'memberImportDataPage', component: memberImportDataPage },
      { path: 'memberImportLogPage', component: memberImportLogPage },
      { path: 'oPointStatisticsPage', component: oPointStatisticsPage },
      { path: 'oPointImportPage', component: oPointImportPage },
      { path: 'messagePage', component: messagePage },
      { path: 'auditPage', component: auditPage },
      { path: 'reviewPage', component: reviewPage },
      { path: 'auditLogPage', component: auditLogPage },
      { path: 'userManagementPage', component: userManagementPage },
      { path: 'roleManagementPage', component: roleManagementPage },
      { path: 'permissionManagementPage', component: permissionManagementPage }
    ]
  },
  { path: '*', component: errorPage404 }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes
})
