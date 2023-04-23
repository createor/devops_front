<!-- 创建角色绑定菜单 -->
<template>
  <el-tree
    :data="data"
    show-checkbox
    :default-expanded-keys="[1]"
    :props="defaultProps"
  >
  </el-tree>
</template>

<script>
export default {
  name: 'EditRole',
  data () {
    return {
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      data: [{
        id: 1,
        label: '全部菜单',
        children: [{
          id: 2,
          label: '大盘'
        }, {
          id: 3,
          label: '主机',
          children: [{
            id: 4,
            label: '详情'
          }]
        }, {
          id: 5,
          label: '用户'
        }]
      }]
    }
  }
}
</script>

<style scoped>

</style>
