<!-- 通过企业微信告警 -->
<template>
  <el-collapse-item :title="title" :name="title">
    <el-form ref="wx" :model="wx">
      <el-form-item label="企业微信群机器人">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <alarm-item :checkList="checkList" />
      </el-form-item>
    </el-form>
  </el-collapse-item>
</template>

<script>
import AlarmItem from './AlarmItem'
export default {
  name: 'AlarmByWx',
  components: {
    AlarmItem
  },
  data () {
    return {
      title: '企业微信告警',
      checkList: ['内存超过80%']
    }
  }
}
</script>

<style scoped>

</style>
