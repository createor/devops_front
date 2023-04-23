<!-- 显示所有角色 -->
<template>
  <el-table :data="roleData">
    <el-table-column label="ID" prop="id"></el-table-column>
    <el-table-column label="角色名" prop="roleName"></el-table-column>
    <el-table-column label="角色id" prop="roleId"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          @click="edit(scope.$index, scope.row)"
          type="text"
          size="small"
        >
        编辑
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'Role',
  methods: {
    edit (index, data) {

    }
  }
}
</script>

<style scoped>

</style>
