<template>
  <div>
    <el-form :inline="true" :model="queryList">
      <el-form-item label="用户登入名：">
        <el-input v-model="queryList.userLoginName" placeholder="用户登入名" size='small'></el-input>
      </el-form-item>
      <el-form-item label="用户名：">
        <el-input v-model="queryList.userName" placeholder="用户名" size='small'></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="hanleSearch" icon='el-icon-search' size='small'>搜索</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleReset" icon='el-icon-refresh' size='small'>重置</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleCreate" icon='el-icon-edit' size='small'>新增</el-button>
      </el-form-item>
    </el-form>

    <el-table v-loading="loading" element-loading-text="拼命加载中" :data="tableData" stripe border style="width: 100%"
    :max-height="maxHeight" size="small">
      <el-table-column prop="userLoginName" label="用户登入名" min-width="150" align="center">
      </el-table-column>
      <el-table-column prop="userName" label="用户名" min-width="100" align="center">
      </el-table-column>
      <el-table-column prop="userMail" label="邮箱地址" min-width="190" align="center">
      </el-table-column>
      <el-table-column prop="lastLoginIp" label="上次登入IP" min-width="130" align="center">
      </el-table-column>
      <el-table-column prop="lastLoginTime" label="上次登入时间" min-width="160" align="center">
      </el-table-column>
      <el-table-column prop="currentLoginIp" label="最新登入IP" min-width="130" align="center">
      </el-table-column>
      <el-table-column prop="currentLoginTime" label="最新登入时间" min-width="160" align="center">
      </el-table-column>
      <el-table-column prop="createName" label="创建人" min-width="100" align="center">
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" min-width="160" align="center">
      </el-table-column>
      <el-table-column prop="modifyName" label="修改人" min-width="100" align="center">
      </el-table-column>
      <el-table-column prop="modifyTime" label="修改时间" min-width="160" align="center">
      </el-table-column>
      <el-table-column prop="userState" label="状态" align="center" fixed="right">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.userState === '00' ? 'primary' : 'success'">{{scope.row.userState}}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" fixed="right">
        <template slot-scope="scope">
          <el-button type="primary">修改</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination background @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>

<script>
import { getUserInfo } from '@/api/systemManagement'
export default {
  data () {
    return {
      queryList: {
        userLoginName: '',
        userName: ''
      },
      tableData: [],
      loading: true
      // maxHeight: ''
    }
  },
  created () {
    this.fetchData()
  },
  computed: {
    maxHeight: function () {
      return window.innerHeight - 60 - 60 - 48
    }
  },
  methods: {
    fetchData () {
      this.loading = true
      getUserInfo(this.queryList).then(res => {
        console.log(res)
        this.tableData = res.data
        this.loading = false
      })
    },
    hanleSearch () {
      console.log(this.queryList)
    },
    handleReset () {

    },
    handleCreate () {

    }
  }
}
</script>
