<!-- 顶部右上角头像及下拉选项 -->
<template>
  <div class="tab-personal">
    <el-dropdown @command="userCommand">
      <div class="el-dropdown-link">
        <!-- 头像设置 -->
        <el-avatar icon="el-icon-user-solid"></el-avatar>
      </div>
      <!-- 下拉选项 -->
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="toPersonal">个人中心</el-dropdown-item>
        <el-dropdown-item command="toPasswd" divided>修改密码</el-dropdown-item>
        <el-dropdown-item command="toLogOut" divided>登出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Personal',
  methods: {
    userCommand (command) {
      console.log(command)
      if (command === 'toLogOut') {
        // 清除token及用户信息后跳转到登陆页
        this.$router.push({
          path: '/login'
        })
      }
      if (command === 'toPersonal') {
        this.$router.push({
          path: '/personal'
        })
      }
      if (command === 'toPasswd') {
        this.$router.push({
          path: '/changepasswd'
        })
      }
    }
  }
}
</script>

<style scoped>
.tab-personal {
  margin-top: 10px;
  margin-left: 30px;
  display: inline-block;
}
</style>
