<!-- 显示所有角色 -->
<template>
  <el-table :data="roleData">
    <el-table-column label="ID" prop="id" v-if="show"></el-table-column>
    <el-table-column label="角色名" prop="roleName"></el-table-column>
    <el-table-column label="角色id" prop="roleId"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          @click="edit(scope.$index, scope.row)"
          type="text"
          size="small"
        >
        <i class="el-icon-edit"></i>
        编辑
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'Role',
  data () {
    return {
      show: false,
      roleData: [{
        id: 1,
        roleName: '管理员',
        roleId: 'admin'
      },
      {
        id: 2,
        roleName: '普通用户',
        roleId: 'user'
      }]
    }
  },
  methods: {
    edit (index, data) {
      this.$router.push({
        name: 'EditRole',
        query: {id: data.roleId}
      })
    }
  }
}
</script>

<style scoped>

</style>
