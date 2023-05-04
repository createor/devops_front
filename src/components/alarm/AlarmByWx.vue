<!-- 通过企业微信告警 -->
<template>
  <el-collapse-item :title="title" :name="title">
    <el-form ref="wx" :model="wx">
      <el-form-item label="企业微信群机器人">
        <el-input
          v-model="wx.addr"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <alarm-item :checkList="wx.checkList" />
      </el-form-item>
      <el-form-item>
        <el-button>{{isUse === true ? '停止' : '启用'}}</el-button>
        <el-button>应用修改</el-button>
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
      isUse: false,
      title: '企业微信告警',
      wx: {
        checkList: ['内存超过80%'],
        addr: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
