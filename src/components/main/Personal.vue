<!-- 顶部右上角头像及下拉选项 -->
<template>
  <div>
    <el-dropdown>
      <div class="el-dropdown-link">
        <el-avatar icon="el-icon-user-solid"></el-avatar>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item divided>登出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Personal'
}
</script>
