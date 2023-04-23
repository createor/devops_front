<!-- 用户管理界面 -->
<template>
  <div>
    <template>
      <!-- 根据姓名搜索 -->
      <el-input v-model="searchName" placeholder="请输入姓名" autocomplete="off" />
      <!-- 根据邮箱搜索 -->
      <el-input v-model="searchEmail" placeholder="请输入邮箱" autocomplete="off" />
      <!-- 根据用户状态搜索 -->
      <el-select v-model="searchStatus">
        <el-option label="在用" value="inUse"></el-option>
        <el-option label="禁用" value="noUse"></el-option>
      </el-select>
      <el-button @click="search">搜索</el-button>
    </template>
    <template>
    <el-table :data="tableData">
      <el-table-column label="ID" prop="id" v-if="show"></el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="邮箱地址" prop="email"></el-table-column>
      <el-table-column label="状态" prop="status" :formatter="showStatus"></el-table-column>
      <el-table-column label="职位" prop="work"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            @click="changeStatus(scope.$index, scope.row)"
            type="text"
            size="small"
          >
          {{scope.row.status === 'inUse' ? '禁用' : '启用'}}
          </el-button>
          <el-button
            @click="editUser(scope.$index, scope.row)"
            type="text"
            size="small"
          >
          编辑
          </el-button>
          <el-button
            @click="bindRole(scope.$index, scope.row)"
            type="text"
            size="small"
          >
          绑定角色
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    </template>
    <template>
      <!-- <edit-user :visible.sync="" :user-data="" /> -->
    </template>
  </div>
</template>
<script>
export default {
  name: 'User',
  data () {
    return {
      show: false,
      searchName: '',
      searchEmail: '',
      searchStatus: '',
      tableData: [{
        id: 1,
        name: '张三',
        email: 'zhangsan@qq.com',
        status: 'inUse'
      },
      {
        id: 2,
        name: '李四',
        email: 'lisi@qq.com',
        status: 'noUse',
        work: '售后'
      }]
    }
  },
  methods: {
    search: function () {
      let currentData = this.tableData
      if (this.searchName) {
        currentData = currentData.filter(data => data.name.toLowerCase().includes(this.searchName.toLowerCase()))
      }
      if (this.searchEmail) {
        currentData = currentData.filter(data => data.email.toLowerCase().includes(this.searchEmail.toLowerCase()))
      }
      if (this.searchStatus) {
        currentData = currentData.filter(data => data.status.toLowerCase().includes(this.searchStatus.toLowerCase()))
      }
      this.tableData = currentData
    },
    showStatus: function (row, column, cellValue, index) {
      if (cellValue === 'inUse') {
        return '在用'
      }
      return '禁用'
    },
    // 修改用户状态
    changeStatus: function (index, data) {
      let ok = true
      if (ok) {
        this.$notify({
          title: '成功',
          message: '用户' + data.name + '状态变更成功',
          type: 'success'
        })
        this.tableData[index].status = data.status === 'inUse' ? 'noUse' : 'inUse'
      } else {
        this.$notify.error({
          title: '错误',
          message: '用户' + data.name + '状态变更失败'
        })
      }
    },
    editUser: function (index, data) {

    },
    bindRole: function (index, data) {
      // 获取用户id
      const { uid } = this.$store.getters.info
      this.$router.push({
        name: 'Role2User',
        query: {id: uid}
      }).catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
.el-input {
  width: 200px;
}
</style>
