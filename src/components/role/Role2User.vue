<!-- 角色绑定用户 -->
<template>
  <div>
    <el-transfer
      filterable
      :filter-method="filterMethod"
      filter-placeholder="请输入角色名称"
      :titles="['未选择','已选择']"
      v-model="value"
      :data="data">
    </el-transfer>
  </div>
</template>

<script>
export default {
  name: 'Role2User',
  data () {
    return {
      value: [],
      data: {},
      filterMethod
    }
  }
}
</script>

<style scoped>

</style>
