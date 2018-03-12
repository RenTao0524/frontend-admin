import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginPage from '@/views/loginPage/index.vue'

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
      component: HelloWorld
    }
  ]
})
