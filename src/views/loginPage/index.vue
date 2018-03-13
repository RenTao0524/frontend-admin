<template>
  <div class='login-container'>
    <el-container>
      <el-header>
        <img src="../../assets/images/logo.jpg" height="50" alt="logo图片">
      </el-header>
      <el-main v-bind:style="{ height: activeHeight + 'px' }">
        <el-form>
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox style="width: 100%;">记住我，下次自动登录</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login" style="width: 100%;">登录</el-button>
          </el-form-item>
        </el-form>
      </el-main>
      <el-footer>
        XXXX后台管理系统 @copyright 2017
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { loginByUsername } from '@/api/login'
// import { cart } from './test'
// import testAPI from './test'
import axios from 'axios'

export default {
  name: 'loginPage',
  data () {
    return {
      activeHeight: ''
    }
  },
  created () {
    var instance = axios.create({
      baseURL: 'https://cnodejs.org/api/v1',
      timeout: 5000
    })
    instance.get('/topics?type=share&limit=10').then(res => console.log(res))
    this.activeHeight = window.innerHeight - 120
  },
  methods: {
    login () {
      loginByUsername().then(res => {
        console.log(res)
      })
      this.$router.push({path: '/homePage'})
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-container {
    height: 100%;
    .el-header>img {
      padding: 5px;
    }
    .el-main {
      position: relative;
      padding: 0;
      background: url('../../assets/images/background.png') no-repeat;
      background-size: 100% 100%;
      .el-form {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 400px;
        padding: 25px;
        background: rgba(255, 255, 255, 0.7);
      }
    }
    .el-footer {
      text-align: center;
      line-height: 3.75;
    }
  }
</style>
