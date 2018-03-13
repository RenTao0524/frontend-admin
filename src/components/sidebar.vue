<template>
  <div>
    <el-container style="height:100%;">
      <el-aside width='200px' style="height:100%;">
        <el-menu background-color='#324157' text-color='#bfcbd9' :default-active='activeItem' unique-opened style="height:100%;">
          <div v-for="item in menuList" :key="item.name">
            <el-menu-item v-if="!item.children" :index='item.path'>{{item.name}}</el-menu-item>
            <el-submenu v-else :index='item.path'>
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.name}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item v-for="childItem in item.children" :key="childItem.name" :index="childItem.path">{{childItem.name}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </div>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>顶栏容器</el-header>
        <el-main>
          <p class="outLine">内容容器
          </p>
        </el-main>
        <el-footer>底栏容器</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeItem: '1-1',
      menuList: [
        {
          name: '运营管理',
          path: '1',
          children: [
            {
              name: '运营推荐位',
              path: '1-1'
            },
            {
              name: '权益产品',
              path: '1-2'
            }
          ]
        },
        {
          name: '会员管理',
          path: '2',
          children: [
            {
              name: '会员列表',
              path: '2-1'
            },
            {
              name: '导入数据',
              path: '2-2'
            },
            {
              name: '导入日志',
              path: '2-3'
            }
          ]
        },
        {
          name: '欧点管理',
          path: '3',
          children: [
            {
              name: '欧点统计',
              path: '3-1'
            },
            {
              name: '欧点导入日志',
              path: '3-2'
            }
          ]
        },
        {
          name: '消息管理',
          path: '4'
        },
        {
          name: '审核管理',
          path: '5',
          children: [
            {
              name: '一级审核',
              path: '5-1'
            },
            {
              name: '二级审核',
              path: '5-2'
            }
          ]
        },
        {
          name: '系统管理',
          path: '6',
          children: [
            {
              name: '用户管理',
              path: '6-1'
            },
            {
              name: '角色管理',
              path: '6-2'
            },
            {
              name: '权限管理',
              path: '6-3'
            }
          ]
        }
      ]
    }
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
  
</style>
