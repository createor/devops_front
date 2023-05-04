<!-- 任务视图 -->
<template>
  <div>
    <!-- 定时任务,选择任务时间 -->
    <el-form ref="taskForm" :model="taskForm" label-width="80px">
      <el-form-item label="任务名">
        <el-input v-model="taskForm.taskName"></el-input>
      </el-form-item>
      <el-form-item label="任务类型">
        <el-select v-model="taskForm.type" placeholder="请选择任务类型">
          <el-option label="立即执行" value="1"></el-option>
          <el-option label="定时任务" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item v-show="taskForm.type==='2'" label="任务次数">
        <el-select v-model="taskForm.mode" placeholder="请选择任务次数">
          <el-option label="仅执行一次" value="1"></el-option>
          <el-option label="每天执行一次" value="2"></el-option>
          <el-option label="按周执行一次" value="3"></el-option>
          <el-option label="选择时间执行一次" value="4"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item v-show="taskForm.type==='2' && taskForm.mode==='3'" label="选择周几">
        <el-checkbox-group v-model="taskForm.week">
          <el-checkbox label="周一"></el-checkbox>
          <el-checkbox label="周二"></el-checkbox>
          <el-checkbox label="周三"></el-checkbox>
          <el-checkbox label="周四"></el-checkbox>
          <el-checkbox label="周五"></el-checkbox>
          <el-checkbox label="周六"></el-checkbox>
          <el-checkbox label="周日"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item v-show="taskForm.type==='2' && taskForm.mode==='4'" label="选择日期">
        <el-date-picker
          type="dates"
          v-model="taskForm.date"
          placeholder="选择一个或多个日期"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item v-show="taskForm.type==='2'" label="执行时间">
        <el-time-picker
          v-model="taskForm.taskTime"
          placeholder="请选择任务时间"
          value-format="HH:mm:ss"
          :picker-options="{
            selectableRange: '00:00:00 - 23:59:59'
          }">
        </el-time-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addTask">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'Task',
  data () {
    return {
      taskForm: {
        taskName: '',
        type: '',
        mode: '',
        week: [],
        date: '',
        taskTime: ''
      }
    }
  },
  methods: {
    addTask () {
      console.log(this.taskForm)
    }
  }
}
</script>

<style scoped>
.el-input {
  width: 300px;
}
</style>
