<!-- 告警项目 -->
<template>
  <el-checkbox-group v-model="checkList">
    <el-checkbox v-for="(value, index) in alarmList" :key="index" :label="value"></el-checkbox>
  </el-checkbox-group>
</template>

<script>
export default {
  name: 'AlarmItem',
  props: {
    checkList: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      alarmList: ['主机离线', '内存超过80%']
    }
  }
}
</script>

<style scoped>

</style>
