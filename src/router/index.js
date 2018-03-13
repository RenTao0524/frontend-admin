import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/layout/layout.vue'
import LoginPage from '@/views/loginPage/index.vue'
import userManagementPage from '@/views/systemManagement/user/index.vue'
import roleManagementPage from '@/views/systemManagement/role/index.vue'
import permissionManagementPage from '@/views/systemManagement/permission/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'loginPage',
      redirect: '/loginPage',
      component: LoginPage
    },
    {
      path: '/loginPage',
      name: 'loginPage',
      component: LoginPage
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: HelloWorld,
      children: [
        { path: '/', component: LoginPage },
        { path: 'userManagementPage', component: userManagementPage },
        { path: 'roleManagementPage', component: roleManagementPage },
        { path: 'permissionManagementPage', component: permissionManagementPage }
      ]
    }
  ]
})
