<template>
  <el-collapse v-model="activeNames">
    <alarm-by-email />
    <alarm-by-wx />
  </el-collapse>
</template>

<script>
import AlarmByEmail from './AlarmByEmail'
import AlarmByWx from './AlarmByWx'
export default {
  name: 'Alarm',
  components: {
    AlarmByEmail,
    AlarmByWx
  },
  data () {
    return {
      activeNames: []
    }
  }
}
</script>

<style scoped>

</style>
