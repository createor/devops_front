<!-- 站内信息提醒 -->
<template>
  <div>
    <template>
      <el-badge :value="total">
        <el-button icon="el-icon-message-solid" type="primary" @click="drawer = true"></el-button>
      </el-badge>
    </template>
    <template>
      <el-drawer
        title="信息"
        :visible.sync="drawer"
        :direction="direction"
      >
        <!-- 主要信息 -->
        <span>1</span>
        <span>2</span>
      </el-drawer>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Info',
  data () {
    return {
      total: 10,
      drawer: false,
      direction: 'rtl'
    }
  }
}
</script>

<style scoped>

</style>
